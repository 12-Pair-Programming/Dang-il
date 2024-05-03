import React from 'react';
import { PropsWithChildren } from 'react';

interface ButtonProps extends React.ComponentProps<'button'> {
  size: string; // 크기 종류
  color: 'colored' | 'none' /* | 'disabled'; */; // 색상 종류
  onClick?: () => void; // 클릭 이벤트 핸들러
  disabled?: boolean; // 비활성화 여부
}

const Button = ({
  size,
  color,
  onClick = () => {},
  disabled = false,
  children,
  ...rest
}: PropsWithChildren<ButtonProps>) => {
  const styleInformation = (size: string, color: 'colored' | 'none') => {
    let sizeStyle, colorStyle, fontStyle;

    switch (size) {
      case 'large':
        sizeStyle = 'py-[14px] px-[136px]';
        fontStyle =
          'font-bold text-base leading-5 align-center whitespace-nowrap';
        break;
      case 'mediumLarge':
        sizeStyle = 'py-3 px-[56px]';
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
        sizeStyle = '';
    }

    switch (color) {
      case 'colored':
        colorStyle = 'bg-primary';
        fontStyle += ' text-white';
        break;
      case 'none':
        colorStyle = 'bg-white border-primary border border-solid';
        fontStyle += ' text-primary';
        break;
      default:
        colorStyle = '';
    }

    if (disabled) {
      colorStyle = 'bg-gray-40';
      fontStyle += ' text-white';
    }

    return `${sizeStyle} ${colorStyle} ${fontStyle}`;
  };

  const buttonClass = `inline-flex items-center gap-2 rounded-md ${styleInformation(
    size,
    color,
  )}`;

  return (
    <button
      className={buttonClass}
      onClick={onClick}
      disabled={disabled}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
