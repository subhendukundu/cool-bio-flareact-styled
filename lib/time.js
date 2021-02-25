export function getTimeRanges (interval, language) {
  const ranges = []
  const date = new Date()
  const format = {
    hour: 'numeric',
    minute: 'numeric'
  }

  for (let minutes = 0; minutes < 24 * 60; minutes = minutes + interval) {
    date.setHours(0)
    date.setMinutes(minutes)
    const formattedDate = date.toLocaleTimeString(language, format)
    const formattedDateValue = date.toLocaleTimeString(language, {
      ...format,
      hour12: false
    })
    ranges.push({
      label: formattedDate,
      value: formattedDateValue
    })
  }

  return ranges
}
