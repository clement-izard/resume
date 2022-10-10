import React, { memo } from 'react';

import useTranslation from 'next-translate/useTranslation';

const Footer = () => {
  const { t } = useTranslation('home');
  return (
    <div className="py-8 bg-zinc-900">
      <div className="flex flex-col sm:flex-row items-center justify-evenly w-full sm:w-[90%] md:w-[80%] lg:w-[70%] mx-auto text-zinc-400">
        <p className="mb-4  sm:mb-0">© Copyright 2021-2022 Clément Izard</p>
        <a
          href="https://github.com/clement-izard/resume"
          target="_blank"
          rel="noreferrer"
          className="underline mb-4  sm:mb-0"
        >
          {t('footer.github')}
        </a>
        <p>
          {t('footer.picture.by')}
          <a
            href="https://unsplash.com/@nasa?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
            target="_blank"
            rel="noreferrer"
          >
            NASA
          </a>
          {t('footer.picture.on')}
          <a
            href="https://unsplash.com/s/photos/earth-at-night?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
            target="_blank"
            rel="noreferrer"
          >
            Unsplash
          </a>
        </p>
        <p>{t('footer.made')}</p>
      </div>
    </div>
  );
};

export default memo(Footer);
