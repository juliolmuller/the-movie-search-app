import React, { useEffect, useState } from 'react'
import { Container, Details, Title, TopicTitle, TopicText, PillsWrapper, Pill } from './styled'
import ImagesCarousel from '../components/ImagesCarousel'
import ShowRating from './ShowRating'
import { dateFormat, withThousandSeparator } from '../../utils'
import tmdb from '../../services/tmdb'

function ShowDetails({ route }) {
  const [show, setShow] = useState({
    ...route.params,
    backdrops: route.params.backdrop_path
      ? [route.params.backdrop_path]
      : [],
  })

  async function fetchShowData() {
    const endpoint = route.params.title ? 'movie' : 'tv'
    const [backdropsResponse, showResponse] = await Promise.all([
      tmdb.get(`/${endpoint}/${route.params.id}/images`),
      tmdb.get(`/${endpoint}/${route.params.id}`, {
        params: {
          language: 'en-US',
        },
      }),
    ])

    setShow({
      ...showResponse.data,
      backdrops: backdropsResponse.data.backdrops,
    })
  }

  useEffect(() => { fetchShowData() }, [route.params.id])

  return (
    <Container>
      <If condition={show.backdrops.length}>
        <ImagesCarousel
          imagesURI={show.backdrops.map(
            ({ file_path }) => tmdb.thumbURL + file_path,
          )}
        />
      </If>

      <Details>
        <Title>{show.name || show.title}</Title>

        <If condition={show.vote_count}>
          <ShowRating
            votesAverage={show.vote_average}
            votesCount={show.vote_count}
          />
        </If>

        <If condition={show.overview}>
          <TopicTitle>Synopsis</TopicTitle>
          <TopicText>{show.overview}</TopicText>
        </If>

        <If condition={show.genres?.length}>
          <TopicTitle>Genres</TopicTitle>
          <PillsWrapper>
            {show.genres.map((genre) => (
              <Pill key={genre.id}>{genre.name}</Pill>
            ))}
          </PillsWrapper>
        </If>

        <If condition={show.first_air_date && show.last_air_date}>
          <TopicTitle>Air Dates</TopicTitle>
          <TopicText>
            {dateFormat(new Date(show.first_air_date))}
            - {dateFormat(new Date(show.last_air_date))}
          </TopicText>
        </If>

        <If condition={show.seasons?.length}>
          <TopicTitle>Seasons</TopicTitle>
          {show.seasons.map((season) => (
            <TopicText key={season.id}>
              {season.name} ({season.episode_count} episodes)
            </TopicText>
          ))}
        </If>

        <If condition={show.release_date}>
          <TopicTitle>Release Date</TopicTitle>
          <TopicText>
            {dateFormat(new Date(show.release_date))}
          </TopicText>
        </If>

        <If condition={show.budget}>
          <TopicTitle>Budget</TopicTitle>
          <TopicText>
            ${withThousandSeparator(show.budget)} USD
          </TopicText>
        </If>

        <If condition={show.revenue}>
          <TopicTitle>Revenue</TopicTitle>
          <TopicText>
            ${withThousandSeparator(show.revenue)} USD
          </TopicText>
        </If>
      </Details>
    </Container>
  )
}

export default ShowDetails
