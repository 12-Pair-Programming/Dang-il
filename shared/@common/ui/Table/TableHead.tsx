const TableHead = () => {
  return (
    <thead className="flex w-full items-start flex-start bg-purple-10 justify-between">
      <tr className="flex w-full">
        <th className="w-1/5 text-left py-3 px-3 gap-3 items-center flex-shrink-0">
          신청자
        </th>
        <th className="w-2/5 text-left py-3 px-3 gap-3 items-center flex-shrink-1">
          소개
        </th>
        <th className="w-1/5 text-left py-3 px-3 gap-3 items-center flex-shrink-1">
          번호
        </th>
        <th className="w-1/5 text-left py-3 px-4 gap-3 items-center flex-shrink-0">
          상태
        </th>
      </tr>
    </thead>
  );
};

export default TableHead;
