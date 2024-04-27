import Table from '@/shared/@common/ui/Table/Table';

const EmployeeList = () => {
  return (
    <div className="w-[963px] mt-[60px] mb-3 mx-[238px]">
      <div>
        <p className="text-[28px] font-bold">신청자 목록</p>
      </div>
      <div className="mt-8 flex gap-[14px] flex-wrap">
        <Table isEmployee={true} />
      </div>
    </div>
  );
};

export default EmployeeList;
