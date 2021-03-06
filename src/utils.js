export const msToTime = (ms, format) => {
  let milliseconds = parseInt(ms % 1000)
  let hours = Math.floor((ms / (1000 * 60 * 60)) % 24)
  let minutes = Math.floor((ms / (1000 * 60)) % 60)
  let seconds = Math.floor((ms / 1000) % 60)

  hours = (hours < 10) ? `0${hours}` : hours
  minutes = (minutes < 10) ? `0${minutes}` : minutes
  seconds = (seconds < 10) ? `0${seconds}` : seconds
  milliseconds = (milliseconds < 10) ? `00${milliseconds}` : (milliseconds < 100) ? `0${milliseconds}` : milliseconds

  switch (format) {
    case 'hms':
      return `${hours}:${minutes}:${seconds}`
    case 'msm':
      return `${minutes}:${seconds}.${milliseconds}`
    default:
      return `${hours}:${minutes}:${seconds}.${milliseconds}`
  }
}
