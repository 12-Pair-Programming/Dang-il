import React, { useState } from 'react';
import TableBody from '@/shared/@common/ui/Table/TableBody';
import TableHead from '@/shared/@common/ui/Table/TableHead';
import { useGetApplicationData } from '@/shared/@common/ui/Table/test/tableTest';

interface UserData {
  item: {
    user: {
      item: {
        id: string;
        name: string;
        bio: string;
        phone: string;
      };
    };
  };
}

const Table = () => {
  const [disabled, setDisabled] = useState(false);
  const handleClick = () => {
    console.log('클릭되었습니다.');
    setDisabled(!disabled);
  };

  const { data } = useGetApplicationData();

  let users = [];
  if (data && data.items) {
    users = data.items.map((v: UserData) => v.item.user.item);
  }

  return (
    <>
      <table className="inline-flex flex-col items-start rounded-2xl border-gray-20 border border-solid w-full">
        <TableHead />
        {users &&
          users.map((v: any) => (
            <TableBody
              id={v.id}
              name={v.name}
              introduce={v.bio}
              phone={v.phone}
            />
          ))}
      </table>
    </>
  );
};

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
export default Table;
