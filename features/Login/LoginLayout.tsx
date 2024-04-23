import React, { useState } from 'react';
import LoginBody from './LoginBody';

export default function LoginLayout() {
  return (
    <>
      <div className=" w-screen h-screen flex items-center justify-center bg-white">
        <LoginBody />
      </div>
    </>
  );
}
