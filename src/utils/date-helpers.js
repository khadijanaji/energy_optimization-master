// @flow

const dayTensDigit = 10;
const monthTensDigit = 9;

export const formatDate = (date: Date) => {
  const day = date.getDate() < dayTensDigit
    ? `0${date.getDate()}`
    : date.getDate();
  const month = date.getMonth() < monthTensDigit
    ? `0${date.getMonth() + 1}`
    : date.getMonth() + 1;
  const year = date.getFullYear();

  return `${year}-${month}-${day}`;
};
