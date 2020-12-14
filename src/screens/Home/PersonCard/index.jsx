import React from 'react'
import tmdb from '../../../services/tmdb'
import { Card, Thumbnail, Details, Department, PersonName } from './styled'

const PersonCard = ({ profile_path, known_for_department, name }) => (
  <Card>
    <Thumbnail source={{ uri: tmdb.thumbURL + profile_path }} />
    <Details>
      <Department>
        Know for {known_for_department}
      </Department>
      <PersonName>
        {name}
      </PersonName>
    </Details>
  </Card>
)

export default PersonCard
