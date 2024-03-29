export function msToTime(duration, type) {
  var milliseconds = Math.floor((duration % 1000) / 100),
    seconds = Math.floor((duration / 1000) % 60),
    minutes = Math.floor((duration / (1000 * 60)) % 60),
    hours = Math.floor((duration / (1000 * 60 * 60)) % 24);

  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;
  if (type === "text") {
    if (hours === "00") {
      return minutes + " mins " + seconds + " sec";
    } else {
      return hours + "hour" + minutes + "mins" + seconds + "sec";
    }
  } else {
    return minutes + ":" + seconds;
  }
}
