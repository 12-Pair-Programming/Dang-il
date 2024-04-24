import { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

interface CalendarProps {
  onDateChange: string; // 선택된 날짜를 전달하기 위한 콜백 함수
}

const Calendar: React.FC<CalendarProps> = ({ onDateChange }) => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());

  // 날짜가 변경될 때마다 선택된 날짜를 상위 컴포넌트로 전달하는 함수
  const handleDateChange = (date: Date | null) => {
    setSelectedDate(date); // 로컬 state 업데이트
    if (date !== null) {
      onDateChange(date.toISOString());
    } else {
      onDateChange(null);
    }
  };

  return (
    <div className='flex flex-col items-start gap-2'>
      <p className='text-black'>
        시작 일시*
      </p>
        <DatePicker
          dateFormat='YYYY년 MM월 dd일, hh시 mm분'
          shouldCloseOnSelect
          minDate={new Date()}
          maxDate={new Date('2099-12-31')}
          selected={selectedDate}
          onChange={handleDateChange} // handleDateChange 함수로 변경
          placeholderText='일자'
          className='flex w-[300px] py-4 px-5 items-center gap-[10px] self-stretch rounded-md border border-solid border-gray-30 bg-white text-black'
          showTimeSelect
        />
    </div>
  );
};

export default Calendar;
