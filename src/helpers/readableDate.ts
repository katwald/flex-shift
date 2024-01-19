export const readableDate = (date: Date): string => {
  const event = new Date(date);
  const options: Intl.DateTimeFormatOptions = {
    // weekday: "short",
    // year: "numeric",
    month: "short",
    day: "numeric",
  };
  const time = event.toLocaleTimeString(navigator.language, {
    hour: "2-digit",
    minute: "2-digit",
  });
  return `${event.toLocaleDateString("en-FE", options)} ${time}`;
};
