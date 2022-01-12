import React, { memo } from 'react';
import Image from 'next/image';
import useTranslation from 'next-translate/useTranslation';

import { Inner, ImageContainer, Contact, AboutMe, Title, Paragraph } from './Styles';

const About = () => {
  const { t } = useTranslation('home');

  return (
    <section id="about" className="bg-zinc-900 py-24">
      <Inner className="w-4/5 sm:w-3/5 mx-auto flex flex-col lg:grid lg:gap-x-16 lg:gap-y-8">
        <ImageContainer className="row-span-2 mx-auto w-40 overflow-hidden">
          <Image
            src="/profile.jpg"
            alt="Profile picture"
            width={100}
            height={100}
            layout="responsive"
          />
        </ImageContainer>
        <AboutMe className="mt-6 lg:mt-0">
          <h2 className="pb-4 text-white font-semibold">{t('about.title')}</h2>
          <p className="text-zinc-400 mb-6">{t('about.speech0')}</p>
          <p className="text-zinc-400 mb-6">{t('about.speech1')}</p>
          <p className="text-zinc-400">{t('about.speech2')}</p>
        </AboutMe>
        <Contact className="mt-6 lg:mt-0">
          <h2 className="pb-4 mb-4 text-white font-semibold">{t('about.contactTitle')}</h2>
          <div className="flex">
            <a
              href="https://github.com/clement-izard"
              target="_blank"
              rel="noreferrer"
              className="mr-12"
            >
              <Image src="/icons/github.png" alt="Github icon" width={35} height={35} />
            </a>
            <a
              href="https://www.linkedin.com/in/clement-izard"
              target="_blank"
              rel="noreferrer"
              className="mr-12"
            >
              <Image src="/icons/linkedin.png" alt="Github icon" width={35} height={35} />
            </a>
            <a
              href="mailto:clementizard@tutanota.com"
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center"
            >
              <Image src="/icons/mail.png" alt="Email icon" width={35} height={30} />
            </a>
          </div>
        </Contact>
      </Inner>
    </section>
  );
};

export default memo(About);
