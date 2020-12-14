import React, { useEffect, useState } from 'react'
import { Container, Details, Title, TopicTitle, TopicText, PillsWrapper, Pill } from './styled'
import BackdropsCarousel from './BackdropsCarousel'
import ShowRating from './ShowRating'
import { dateFormat, withThousandSeparator } from '../../utils'
import tmdb from '../../services/tmdb'

const ShowDetails = ({ route }) => {
  const [show, setShow] = useState({
    ...route.params,
    backdrops: route.params.backdrop_path
      ? [route.params.backdrop_path]
      : [],
  })

  const fetchShowData = async () => {
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
      {Boolean(show.backdrops.length) && (
        <BackdropsCarousel
          imagesURI={show.backdrops.map(
            ({ file_path }) => tmdb.thumbURL + file_path,
          )}
        />
      )}

      <Details>
        <Title>{show.name || show.title}</Title>

        {Boolean(show.vote_count) && (
          <ShowRating
            votesAverage={show.vote_average}
            votesCount={show.vote_count}
          />
        )}

        {Boolean(show.overview) && <>
          <TopicTitle>Synopsis</TopicTitle>
          <TopicText>{show.overview}</TopicText>
        </>}

        {Boolean(show.genres?.length) && <>
          <TopicTitle>Genres</TopicTitle>
          <PillsWrapper>
            {show.genres.map((genre) => (
              <Pill key={genre.id}>{genre.name}</Pill>
            ))}
          </PillsWrapper>
        </>}

        {Boolean(show.first_air_date && show.last_air_date) && <>
          <TopicTitle>Air Dates</TopicTitle>
          <TopicText>
            {dateFormat(new Date(show.first_air_date))}
            - {dateFormat(new Date(show.last_air_date))}
          </TopicText>
        </>}

        {Boolean(show.seasons?.length) && <>
          <TopicTitle>Seasons</TopicTitle>
          {show.seasons.map((season) => (
            <TopicText key={season.id}>
              {season.name} ({season.episode_count} episodes)
            </TopicText>
          ))}
        </>}

        {Boolean(show.release_date) && <>
          <TopicTitle>Release Date</TopicTitle>
          <TopicText>
            {dateFormat(new Date(show.release_date))}
          </TopicText>
        </>}

        {Boolean(show.budget) && <>
          <TopicTitle>Budget</TopicTitle>
          <TopicText>
            ${withThousandSeparator(show.budget)} USD
          </TopicText>
        </>}

        {Boolean(show.revenue) && <>
          <TopicTitle>Revenue</TopicTitle>
          <TopicText>
            ${withThousandSeparator(show.revenue)} USD
          </TopicText>
        </>}
      </Details>
    </Container>
  )
}

export default ShowDetails
