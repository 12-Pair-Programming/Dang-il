import Table from '@/shared/@common/ui/Table/Table';

interface props {
  shopId: string;
  noticeId: string;
}

const EmployeeList = ({ shopId, noticeId }: props) => {
  return (
    <div className="w-[963px] mt-[60px] mb-3 mx-[238px] tablet:w-[680px] mobile:max-w-[520px]">
      <div>
        <p className="text-[28px] font-bold">신청자 목록</p>
      </div>
      <div className="mt-8 flex gap-[14px] flex-wrap">
        <Table isEmployee={true} shopId={shopId} noticeId={noticeId} />
      </div>
    </div>
  );
};

export default EmployeeList;
