import React from 'react'
import { Pill } from './styled'

const FilterPill = ({ state }) => {
  const [filter, setFilter] = state

  const handlePress = () => {
    setFilter((prev) => ({
      ...prev,
      enabled: !prev.enabled,
    }))
  }

  return (
    <Pill enabled={filter.enabled} onPress={handlePress}>
      {filter.label}
    </Pill>
  )
}

export default FilterPill
