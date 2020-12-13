
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
