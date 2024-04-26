import React, { useEffect, useRef } from 'react';
import Router from 'next/router';

interface NavButtonProps {
  children: React.ReactNode;
  href: string;
  onClick?: () => void;
}

export const NavButton = ({ children, href, onClick }: NavButtonProps) => {
  const handleClick = () => {
    Router.push(href);
    if (onClick) {
      onClick();
    }
  };

  return (
    <button
      className="hover:bg-purple-30 hover:text-white p-1 rounded-2xl font-bold"
      onClick={handleClick}
    >
      {children}
    </button>
  );
};
