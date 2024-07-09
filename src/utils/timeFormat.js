import {format, isToday, isYesterday, parseISO} from "date-fns";

const timeFormat = (time) => {
	return isToday(parseISO(time)) ? "Today" : isYesterday(parseISO(time)) ? "Yesterday" : format(parseISO(time), "yyyy-MM-dd");
};

export default timeFormat;
