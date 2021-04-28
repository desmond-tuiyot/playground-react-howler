export const formatTime = (duration) => {
  let seconds = Math.floor(duration % 60);
  let minutes = Math.floor(duration / 60);
  minutes = minutes > 9 ? minutes : `0${minutes}`;

  return `${minutes}:${seconds}`;
};
