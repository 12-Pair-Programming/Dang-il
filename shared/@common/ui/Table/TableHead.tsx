import { TableProps } from './Table';

const TableHead: React.FC<TableProps> = ({ isEmployee }) => {
  return (
    <thead className="flex w-full items-start flex-start bg-purple-10 justify-between">
      <tr className="flex w-full">
        <th className="w-1/4 text-left py-3 px-3 gap-3 items-center flex-shrink-0">
          {isEmployee ? '신청자' : '공고명'}
        </th>
        <th className="w-1/4 text-left py-3 px-3 gap-3 items-center flex-shrink-1">
          {isEmployee ? '소개' : '일자'}
        </th>
        <th className="w-1/4 text-left py-3 px-3 gap-3 items-center flex-shrink-1">
          {isEmployee ? '번호' : '시급'}
        </th>
        <th className="w-1/4 text-left py-3 px-4 gap-3 items-center flex-shrink-0">
          상태
        </th>
      </tr>
    </thead>
  );
};

export default TableHead;
