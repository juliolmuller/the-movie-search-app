import React, { useEffect, useState } from 'react'
import { Container, Details, Title, TopicTitle, TopicText } from './styled'
import ImagesCarousel from '../components/ImagesCarousel'
import { dateFormat } from '../../utils'
import tmdb from '../../services/tmdb'

function PersonDetails({ route }) {
  const [person, setPerson] = useState({
    ...route.params,
    profiles: route.params.profile_path
      ? [route.params.profile_path]
      : [],
  })

  async function fetchPersonData() {
    const [profilesResponse, personResponse] = await Promise.all([
      tmdb.get(`/person/${route.params.id}/images`),
      tmdb.get(`/person/${route.params.id}`, {
        params: {
          language: 'en-US',
        },
      }),
    ])

    setPerson({
      ...personResponse.data,
      profiles: profilesResponse.data.profiles,
    })
  }

  useEffect(() => { fetchPersonData() }, [route.params.id])

  return (
    <Container>
      <If condition={person.profiles.length}>
        <ImagesCarousel
          imagesURI={person.profiles.map(
            ({ file_path }) => tmdb.thumbURL + file_path,
          )}
        />
      </If>

      <Details>
        <Title>{person.name}</Title>

        <If condition={person.biography}>
          <TopicTitle>Biography</TopicTitle>
          <TopicText>{person.biography}</TopicText>
        </If>

        <If condition={person.known_for_department}>
          <TopicTitle>Known for Department</TopicTitle>
          <TopicText>{person.known_for_department}</TopicText>
        </If>

        <If condition={person.place_of_birth}>
          <TopicTitle>Place of Birth</TopicTitle>
          <TopicText>${person.place_of_birth}</TopicText>
        </If>

        <If condition={person.birthday}>
          <TopicTitle>Date of Birth</TopicTitle>
          <TopicText>
            {dateFormat(new Date(person.birthday))}
          </TopicText>
        </If>

        <If condition={person.deathday}>
          <TopicTitle>Date of Death</TopicTitle>
          <TopicText>
            {dateFormat(new Date(person.deathday))}
          </TopicText>
        </If>
      </Details>
    </Container>
  )
}

export default PersonDetails
