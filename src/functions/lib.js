
export function toWrittenDate (d) {
  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

  const date = d.getDate() + 1
  const year = d.getFullYear()
  return `${days[d.getDay()]}, ${months[d.getMonth()]} ${date}, ${year}`
}
