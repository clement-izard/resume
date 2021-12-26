import React, { memo } from 'react';

import { Container } from './Styles';

const Footer = () => {
  return (
    <div className="py-8 bg-zinc-900">
      <div className="flex flex-col sm:flex-row items-center justify-evenly w-full sm:w-[90%] md:w-[80%] lg:w-[70%] mx-auto text-zinc-400">
        <p className="mb-4  sm:mb-0">© Copyright 2021 Clement Izard</p>
        <a
          href="https://github.com/clement-izard/resume"
          target="_blank"
          rel="noreferrer"
          className="underline mb-4  sm:mb-0"
        >
          Check this website&apos;s code on my repository
        </a>
        <p>Made with ☕</p>
      </div>
    </div>
  );
};

export default memo(Footer);
