import React from 'react'
import tmdb from '../../../services/tmdb'
import { Card, Thumbnail, Details, Department, PersonName } from './styled'

function PersonCard({ profile_path, known_for_department, name }) {
  return (
    <Card>
      <Thumbnail source={{ uri: tmdb.thumbURL + profile_path }} />
      <Details>
        <Department>
          Known for {known_for_department}
        </Department>
        <PersonName>
          {name}
        </PersonName>
      </Details>
    </Card>
  )
}

export default PersonCard
