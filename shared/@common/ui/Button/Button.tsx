import React from 'react';
import { PropsWithChildren } from 'react';

interface ButtonProps {
  size: string; // 크기 종류
  color: 'colored' | 'none' /* | 'disabled'; */; // 색상 종류
  onClick: () => void; // 클릭 이벤트 핸들러
  disabled?: boolean; // 비활성화 여부
}

const Button = ({
  size,
  color,
  onClick,
  disabled = false,
  children,
}: PropsWithChildren<ButtonProps>) => {
  const styleInformation = (
    size: string,
    color: 'colored' | 'none' /*| 'disabled' */,
  ) => {
    let sizeStyle, colorStyle, fontStyle;

    switch (size) {
      case 'large':
        sizeStyle = 'py-[14px] px-[136px]';
        fontStyle =
          'font-bold text-base leading-5 align-center whitespace-nowrap';
        break;
      case 'mediumLarge':
        sizeStyle = 'py-3 px-[57px]';
        fontStyle = 'font-bold text-base leading-5 text-center';

        break;
      case 'medium':
        sizeStyle = 'py-[10px] px-[20px]';
        fontStyle =
          'font-bold text-sm leading-5 align-center whitespace-nowrap';
        break;

      case 'mediumSmall':
        sizeStyle = 'py-[18px] px-[20px]';
        fontStyle =
          'font-bold text-base leading-5 text-center whitespace-nowrap';
        break;

      case 'small':
        sizeStyle = 'py-[8px] px-[12px]';
        fontStyle =
          'font-bold text-xs leading-5 align-center whitespace-nowrap';
        break;
      default:
        sizeStyle = ''; // 기본값 처리
    }

    switch (color) {
      case 'colored':
        colorStyle = 'bg-primary';
        fontStyle += ' text-white'; // 텍스트 색상 조정
        break;
      case 'none':
        colorStyle = 'bg-white border-primary border border-solid';
        fontStyle += ' text-primary'; // 텍스트 색상 조정
        break;
      // case 'disabled':
      //   colorStyle = 'bg-gray-40';
      //   fontStyle += ' text-white'; // 텍스트 색상 조정
      //   break;
      default:
        colorStyle = ''; // 기본값 처리
    }

    if (disabled) {
      colorStyle = 'bg-gray-40';
      fontStyle += ' text-white';
    }

    return `${sizeStyle} ${colorStyle} ${fontStyle}`; // 크기, 색상 및 텍스트 스타일 조합
  };

  const buttonClass = `inline-flex items-center gap-2 rounded-md ${styleInformation(
    size,
    color,
  )}`;

  return (
    <button className={buttonClass} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
};

export default Button;
