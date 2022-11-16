import moment from "moment";
import "moment/locale/ko";

moment.locale("ko");

const useDate = (value) => {
  const date = moment(value);
  return date.format("YYYY. MM. DD.");
};

export default useDate;
