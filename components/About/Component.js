import React, { memo } from 'react';
import Image from 'next/image';
import useTranslation from 'next-translate/useTranslation';
import { motion } from 'framer-motion';

import { Inner, ImageContainer, Contact, AboutMe } from './Styles';
import { textVariants, logoVariants } from './Animations';

const About = () => {
  const { t, lang } = useTranslation('home');

  return (
    <section id='about' className='bg-zinc-900 py-24 md:py-48'>
      <Inner className='w-4/5 sm:w-3/5 mx-auto flex flex-col lg:grid lg:gap-x-16 lg:gap-y-8'>
        <ImageContainer className='row-span-2 mx-auto w-40 overflow-hidden w-[100px] h-[100px]'>
          {/*<Image*/}
          {/*  src="/profile.jpg"*/}
          {/*  alt="Profile picture"*/}
          {/*  width={100}*/}
          {/*  height={100}*/}
          {/*  layout="responsive"*/}
          {/*/>*/}
        </ImageContainer>
        <AboutMe className='mt-6 lg:mt-0'>
          <motion.h2
            whileInView="active"
            initial="hidden"
            variants={textVariants}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 0.6 }}
            className='pb-4 text-white font-semibold'>{t('about.title')}</motion.h2>
          <motion.p
            whileInView="active"
            initial="hidden"
            variants={textVariants}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 0.6 }}
            className='text-zinc-400 mb-6'>{t('about.speech0')}</motion.p>
          <motion.p
            whileInView="active"
            initial="hidden"
            variants={textVariants}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 0.6 }}
            className='text-zinc-400 mb-6'>{t('about.speech1')}</motion.p>
          <motion.p
            whileInView="active"
            initial="hidden"
            variants={textVariants}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 0.6 }}
            className='text-zinc-400 mb-6'>{t('about.speech2')}</motion.p>
          {/*<p className="text-zinc-400">{t('about.speech3')}</p>*/}
        </AboutMe>
        <Contact className='mt-6 lg:mt-0'>
          <motion.h2
            whileInView="active"
            initial="hidden"
            variants={textVariants}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 0.6 }}
            className='pb-4 mb-4 text-white font-semibold'>{t('about.contactTitle')}</motion.h2>
          <div className='flex'>
            <motion.a
              whileInView="active"
              initial="hidden"
              variants={logoVariants}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.6 }}
              href='https://github.com/clement-izard'
              target='_blank'
              rel='noreferrer'
              className='mr-12'
            >
              <Image src='/icons/github.png' alt='Github icon' width={35} height={35} />
            </motion.a>
            <motion.a
              whileInView="active"
              initial="hidden"
              variants={logoVariants}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.6 }}
              href='https://www.linkedin.com/in/clement-izard'
              target='_blank'
              rel='noreferrer'
              className='mr-12'
            >
              <Image src='/icons/linkedin.png' alt='Github icon' width={35} height={35} />
            </motion.a>
            <motion.a
              whileInView="active"
              initial="hidden"
              variants={logoVariants}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.6 }}
              href='mailto:clementizard@tutanota.com'
              target='_blank'
              rel='noreferrer'
              className='flex items-center justify-center mr-12'
            >
              <Image src='/icons/mail.png' alt='Email icon' width={35} height={30} />
            </motion.a>
            <motion.a
              whileInView="active"
              initial="hidden"
              variants={logoVariants}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.6 }}
              href={lang === 'fr' ? '/cv/Izard Clement - CV.pdf' : '/cv/Izard Clement - Resume.pdf'}
              className='flex items-center justify-center'
              download
            >
              <Image src='/icons/pdf-file.png' alt='Email icon' width={30} height={35} />
            </motion.a>
          </div>
        </Contact>
      </Inner>
    </section>
  );
};

export default memo(About);
