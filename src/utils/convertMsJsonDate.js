const convertMsJsonDate = (msJsonDate) => {
  const match = /\/Date\((-?\d+)([+-]\d{4})?\)\//.exec(msJsonDate);
  if (!match) throw new Error("Invalid date format");

  const timestamp = Number(match[1]);
  const offset = match[2];

  let date = new Date(timestamp);

  if (offset) {
    // Convert offset like "-0000" or "+0530" to minutes
    const sign = offset[0] === "+" ? 1 : -1;
    const hours = Number(offset.substr(1, 2));
    const minutes = Number(offset.substr(3, 2));
    const totalMinutes = sign * (hours * 60 + minutes);

    // Adjust date by offset minutes
    date = new Date(date.getTime() - totalMinutes * 60000);
  }

  return date;
};

export default convertMsJsonDate;
