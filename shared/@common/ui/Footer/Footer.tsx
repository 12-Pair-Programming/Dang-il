import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="w-full h-[150px] px-[238px] py-8 flex flex-col justify-center items-center bg-gray-10 gap-2 tablet:px-8 tablet:py-[37px] mobile:px-5 pt-8 pb-4">
      <div className="w-[1024px] flex justify-between flex-row mobile:grid mobile:grid-cols-2 mobile:gap-y-10 tablet:w-full mobile:w-full">
        <div className="flex flex-row mobile:order-3 mobile:justify-start">
          <p className=" text-gray-50">©codeit - 2023</p>
        </div>
        <div className="flex flex-row items-start gap-[10px] mobile:justify-start mobile:gap-[30px]">
          <p className=" text-gray-50">Privacy Policy</p>
          <p className=" text-gray-50">FAQ</p>
        </div>
        <div className="flex flex-row items-start gap-[10px] mobile:justify-end">
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
