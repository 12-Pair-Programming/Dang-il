import Image from 'next/image';

interface FaAngleRightProps {
  onClick: () => void;
  disabled: boolean;
}

const FaAngleRight = ({ onClick, disabled }: FaAngleRightProps) => {
  return (
    <Image
      src="/images/rightChevron.svg"
      width={20}
      height={20}
      alt="다음 페이지 이동 아이콘"
    />
  );
};

export default FaAngleRight;
