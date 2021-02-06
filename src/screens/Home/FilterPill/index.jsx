import React from 'react'
import { Pill } from './styled'

function FilterPill({ state }) {
  const [filter, setFilter] = state

  function handlePress() {
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
