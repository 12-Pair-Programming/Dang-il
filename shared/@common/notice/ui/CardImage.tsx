import Image from 'next/image';

interface props {
  imageUrl: string;
  closed: boolean;
  isPastNotice?: boolean;
  width: number;
  height: number;
}
/**
 * 카드 내 이미지를 보여주는 컴포넌트
 * - 지난 공고의 경우 반투명한 레이어 및 문구 추가
 * @param imageUrl 이미지 경로
 * @param closed 닫힘 공고 여부
 * @param isPastNotice 지난 공고 여부
 * @param width 이미지 div의 가로 - ex : 312px , auto, full
 * @param height 이미지 div의 세로 - ex : 312px , auto, full
 * @returns
 */
const CardImage = ({
  imageUrl,
  closed,
  isPastNotice,
  width,
  height,
}: props) => {
  return (
    <div className="flex justify-center items-center rounded-2xl object-cover w-[550px] h-[346px] relative">
      <Image
        className="object-cover"
        src={imageUrl}
        alt="가게 이미지"
        width={width}
        height={height}
      />

      {(closed || isPastNotice) && (
        <>
          <div className="absolute items-center bg-black opacity-50 rounded-2xl m-[-10px] w-[557px] h-[345px]" />
          <p className="absolute text-3xl font-bold text-gray-30">
            {isPastNotice ? '지난 공고' : '닫힌 공고'}
          </p>
        </>
      )}
    </div>
  );
};

export default CardImage;
