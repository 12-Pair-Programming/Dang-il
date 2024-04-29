import { useState } from 'react';
import Table from '@/shared/@common/ui/Table/Table';

const TableComponent = () => {
  const [isEmployee, setIsEmployee] = useState(false);
  return (
    <>
      <Table isEmployee={isEmployee} />
      <Table isEmployee />
    </>
  );
};

// 첫번째 일반 회원 용
// 두번째 사장님 용

{
  /* 
  사장님 확인 용
  <Table
  id={users.id}
  userName={users.name}
  date={data.items.item.startsAt.slice(0, 10)}
  hour={data.items.item.startsAt.slice(12)}
  hourlypay={data.items.item.notice.item.hourlyPay}
  statuses={data.items.item.status}
/>; */
}

/*
  Button Component 사용법
  Button Component에 직접 접근해보시면, size가 large, medium, small 세 가지로 나누어져 있습니다.
  또한, color도 마찬가지로 colored와 none으로 설정되어 있습니다.
  onClick은 handleClick 함수를 조정하시면서 사용하시면 됩니다.
  content에는 버튼에 들어갈 내용을 적어주시면 됩니다.
  disabled를 설정하실 때, 예시에서는 handleClick에 의해 조정되게 했지만, 필요하신 경우에는 조건을 직접 붙이셔서 disabled의 조건을
  만들어주시면 됩니다. 이 예시 컴포넌트에서는 handleClick 하나로 모든 Button이 동작해 한번에 disabled되고, 한번에 다시 disabled가
  풀립니다.
*/

export default TableComponent;
