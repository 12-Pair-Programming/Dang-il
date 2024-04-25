import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="w-full px-[238px] py-8 flex flex-col bg-gray-10 gap-2">
      <div className="flex self-stretch justify-between flex-row">
        <div className="flex flex-row">
          <p className=" text-gray-50">©codeit - 2023</p>
        </div>
        <div className="flex flex-row items-start gap-[10px]">
          <p className=" text-gray-50">Privacy Policy</p>
          <p className=" text-gray-50">FAQ</p>
        </div>
        <div className="flex flex-row items-start gap-[10px]">
          <Link href={'/'}>
            <Image
              width={25}
              height={25}
              src={'/images/envelopeIcon.png'}
              alt="인벨로프 아이콘"
            />
          </Link>
          <Link href={'https://www.facebook.com/?locale=ko_KR'}>
            <Image
              width={25}
              height={25}
              src={'/images/facebookIcon.png'}
              alt="페이스북 아이콘"
            />
          </Link>
          <Link href={'https://www.instagram.com/'}>
            <Image
              width={25}
              height={25}
              src={'/images/instagramIcon.png'}
              alt="인스타그램 아이콘"
            />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
