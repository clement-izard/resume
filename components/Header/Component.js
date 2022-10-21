import Image from 'next/image';
import React, { memo } from 'react';
import useTranslation from 'next-translate/useTranslation';

import HeaderImg from '../../public/header.jpg';
import { Arrow, Texts } from './Styles';

const Header = () => {
  const { t } = useTranslation('home');

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
        <h1 className="mb-3 text-3xl md:text-6xl font-bold">
          {t('header.title')}
          <a
            href="https://github.com/clement-izard/resume"
            target="_blank"
            rel="noreferrer"
            onClick={e => e.stopPropagation()}
            style={{ textDecoration: 'underline' }}
          >
            {t('header.link')}
          </a>
        </h1>
        <sub className=" text-xl md:text-2xl italic">{t('header.subtitle')}</sub>
      </Texts>
      <Arrow />
    </main>
  );
};

export default memo(Header);
