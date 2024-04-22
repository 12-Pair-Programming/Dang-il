import Image from 'next/image';

interface FaAngleLeftProps {
  onClick: () => void;
  disabled: boolean;
}

const FaAngleLeft = ({ onClick, disabled }: FaAngleLeftProps) => {
  return (
    <div
      className={`flex items-center cursor-pointer ${
        disabled && 'opacity-50 pointer-events-none'
      }`}
      onClick={onClick}
    >
      <Image
        src="/images/leftChevron.svg"
        width={20}
        height={20}
        onClick={onClick}
        alt="이전 페이지 이동 아이콘"
      />
    </div>
  );
};

export default FaAngleLeft;
