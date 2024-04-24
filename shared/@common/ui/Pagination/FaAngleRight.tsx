import Image from 'next/image';

interface FaAngleRightProps {
  onClick: () => void;
  disabled: boolean;
}

const FaAngleRight = ({ onClick, disabled }: FaAngleRightProps) => {
  return (
    <div
      className={`flex items-center cursor-pointer ${
        disabled && 'opacity-50 pointer-events-none'
      }`}
      onClick={onClick}
    >
      <Image
        src="/images/rightChevron.svg"
        width={20}
        height={20}
        onClick={onClick}
        alt="다음 페이지 이동 아이콘"
      />
    </div>
  );
};

export default FaAngleRight;
