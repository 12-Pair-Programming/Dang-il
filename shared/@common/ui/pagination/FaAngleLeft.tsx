import Image from 'next/image';

interface FaAngleLeftProps {
  onClick: () => void;
  disabled: boolean;
}

const FaAngleLeft = ({ onClick, disabled }: FaAngleLeftProps) => {
  return (
    <Image
      src="/images/leftChevron.svg"
      width={20}
      height={20}
      alt="이전 페이지 이동 아이콘"
    />
  );
};

export default FaAngleLeft;
