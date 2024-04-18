import React, { useState } from 'react';
import Image from 'next/image';

export const Footer = () => {
  return (
    <>
      <div className="w-full px-[238px] py-[32px] flex flex-col bg-gray-10 gap-[8px]">
        <div className="flex self-stretch justify-between flex-row">
          <div className="flex flex-row">
            <p className=" text-gray-50">©codeit - 2023</p>
          </div>
          <div className="flex flex-row items-start gap-[10px]">
            <p className=" text-gray-50">Privacy Policy</p>
            <p className=" text-gray-50">FAQ</p>
          </div>
          <div className="flex flex-row items-start gap-[10px]">
            <a href="">
              <Image
                width={25}
                height={25}
                src={'/images/envelopeIcon.png'}
                alt="인벨로프"
              />
            </a>
            <a href="https://www.facebook.com/?locale=ko_KR">
              <Image
                width={25}
                height={25}
                src={'/images/facebookIcon.png'}
                alt="페이스북"
              />
            </a>
            <a href="https://www.instagram.com/">
              <Image
                width={25}
                height={25}
                src={'/images/instagramIcon.png'}
                alt="인스타그램"
              />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
