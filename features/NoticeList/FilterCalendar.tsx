import { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const FilterCalendar = ({ onChange, selected }) => {
  const [selectedDate, setSelectedDate] = useState<Date | null>('');

  return (
    <div className="flex flex-col items-start gap-2">
      <p className="text-black">시작일</p>
      <DatePicker
        dateFormat="YYYY년 MM월 dd일"
        shouldCloseOnSelect
        minDate={new Date()}
        maxDate={new Date('2099-12-31')}
        selected={selected}
        onChange={onChange}
        placeholderText="시작일을 선택해주세요"
        className="caret-white flex w-[350px] py-4 px-5 items-center gap-[10px] self-stretch rounded-md border border-solid border-gray-30 bg-white text-black"
      />
    </div>
  );
};

export default FilterCalendar;
