function addZero(i) {
  if (i < 10) {
    i = '0' + i;
  }
  return i;
}

export const unixToDate = {
  getHours: unixTime => {
    return addZero(new Date(unixTime * 1000).getHours().toFixed(2));
  },
};
