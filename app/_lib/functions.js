import { isSameDay } from "date-fns";
import moment from "moment";

export function formatDate(time, format = "YYYY-MM-DD") {
  const date = new Date(time);
  const formattedDate = moment(date).format(format);
  return formattedDate;
}

export function formatBookingRange(bookingRange) {
  const [from, to] = bookingRange;
  const today = new Date();
  const formattedFrom = formatDate(
    from ? new Date(from) : today,
    "MMMM d, yyyy"
  );
  const formattedTo = formatDate(to ? new Date(to) : today, "MMMM d, yyyy");

  return bookingRange?.length === 1 ||
    isSameDay(bookingRange?.[0], bookingRange?.[1])
    ? `for ${formattedFrom}`
    : `from ${formattedFrom} to ${formattedTo}`;
}
