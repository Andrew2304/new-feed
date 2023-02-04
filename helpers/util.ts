import dayjs from 'dayjs';

const convertStringToDateTimeDisplay = (stringDate: Date) => {
  return stringDate ? dayjs(stringDate).format('ddd, HH:mm') : '';
}
  ;

export {
  convertStringToDateTimeDisplay
};