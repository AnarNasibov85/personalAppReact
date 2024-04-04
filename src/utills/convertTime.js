const monthsList = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

export const convertTime = () => {
  const date = new Date();
  const day = date.getDate();
  const month = monthsList[date.getMonth()];
  const year = date.getFullYear();
  return `${day} ${month} ${year}`;
};
