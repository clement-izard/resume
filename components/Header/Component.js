import Image from 'next/image';
import React, { memo } from 'react';

import HeaderImg from 'public/header.jpg';
import { Arrow, Texts } from './Styles';

const Header = () => {
  return (
    <main id="header" className="w-screen h-screen bg-zinc-900 relative">
      <Image
        src={HeaderImg}
        placeholder="blur"
        alt="Picture of the earth at night"
        priority
        layout="fill"
      />
      <Texts className="absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 text-center text-white">
        <h1 className="mb-3 text-6xl font-bold">Hi, I'm Clement</h1>
        <sub className="text-2xl italic">yet another fullstack engineer</sub>
      </Texts>
      <Arrow />
    </main>
  );
};

export default memo(Header);
