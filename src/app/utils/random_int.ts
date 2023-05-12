const randomInt = (min: number, max: number) => {
  const minInt = Math.floor(min);
  const maxInt = Math.floor(max);
  return Math.floor(Math.random() * (maxInt - minInt + 1) + minInt);
};
export default randomInt;
