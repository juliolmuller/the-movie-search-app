
/**
 * Adds the thousand separator to a numeric value
 *
 * @param {number|string} value
 * @returns {string}
 */
export const withThousandSeparator = (value) => {
  const number = Number(value)

  if (isNaN(number)) {
    return NaN
  }

  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
}

/**
 * Formats a given date using Intl.DateTimeFormat API
 *
 * @param {Date} date
 * @param {string} [style]
 * @returns {string}
 */
export const dateFormat = (date, style = 'long') => {
  if (!(date instanceof Date)) {
    return date
  }

  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jus', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

  return `${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`
}

/**
 * Merge arrays into one, keeping the items order
 *
 * @param {Array} arrays
 * @returns {Array}
 */
export const mixArrays = (...arrays) => {
  const result = []
  let arrayTurn = 0
  let indexTurn = 0
  let attempts = 0

  while (attempts < arrays.length) {
    if (arrays[arrayTurn][indexTurn] !== undefined) {
      result.push(arrays[arrayTurn][indexTurn])
      attempts = 0
    } else {
      attempts++
    }

    arrayTurn = (arrayTurn + 1) % arrays.length
    if (arrayTurn === 0) {
      indexTurn++
    }
  }

  return result
}
