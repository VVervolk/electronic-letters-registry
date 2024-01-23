export default function dateFormatter(date) {
  const dateObject = new Date(date);

  let day = dateObject.getDate();
  let month = dateObject.getMonth() + 1;
  const year = dateObject.getFullYear();

  day = day < 10 ? `0${day}` : day;
  month = month < 10 ? `0${month}` : month;

  const formattedDate = `${day}.${month}.${year}`;

  return formattedDate;
}
