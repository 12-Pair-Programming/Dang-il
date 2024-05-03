import { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

interface CalendarProps {
  onDateChange: (date: Date | null) => void;
}

const Calendar = ({ onDateChange }: CalendarProps) => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());

  const handleDateChange = (date: Date | null) => {
    setSelectedDate(date);
    if (date !== null) {
      onDateChange(date);
    } else {
      onDateChange(null);
    }
  };

  return (
    <div className="flex flex-col items-start gap-2">
      <p className="text-black">시작 일시*</p>
      <DatePicker
        dateFormat="YYYY년 MM월 dd일, hh시 mm분"
        shouldCloseOnSelect
        minDate={new Date()}
        maxDate={new Date('2099-12-31')}
        selected={selectedDate}
        onChange={handleDateChange}
        placeholderText="일자"
        className="flex w-[300px] py-4 px-5 items-center gap-[10px] self-stretch rounded-md border border-solid border-gray-30 bg-white text-black"
        showTimeSelect
      />
    </div>
  );
};

export default Calendar;
