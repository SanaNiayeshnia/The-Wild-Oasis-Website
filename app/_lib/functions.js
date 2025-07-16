import moment from "moment";

export function formatDate(time, format = "YYYY-MM-DD") {
  const date = new Date(time);
  const formattedDate = moment(date).format(format);
  return formattedDate;
}
