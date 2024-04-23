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
    onClick();
  };

  return (
    <button
      className="hover:bg-purple-30 hover:text-white p-2 rounded-2xl"
      onClick={handleClick}
    >
      {children}
    </button>
  );
};
