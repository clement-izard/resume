import React, { memo, useCallback, useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import setLanguage from 'next-translate/setLanguage';
import useTranslation from 'next-translate/useTranslation';
import { motion } from 'framer-motion';

import { styles } from './Styles';
import { langVariants } from './Animations';

const Nav = () => {
  const { t, lang } = useTranslation('home');
  const [langOpen, setLangOpen] = useState(false);
  const [fullBackground, setFullBackground] = useState(false);
  const langRef = useRef(null);

  const handleScroll = useCallback(e => {
    setFullBackground(v => {
      if (window.pageYOffset < e.target.scrollingElement.clientHeight && v) return false;
      if (window.pageYOffset >= e.target.scrollingElement.clientHeight && !v) return true;
      return v;
    });
  }, []);
  const handleLangOpen = useCallback(() => {
    setLangOpen(v => !v);
  }, []);
  const handleLangChange = useCallback(
    newLang => () => {
      setLanguage(newLang, false); // Should be useful next "next-translate" release
    },
    [],
  );

  useEffect(() => {
    if (window) window.addEventListener('scroll', handleScroll);
    return () => {
      if (window) window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  useEffect(() => {
    const handleClickOutside = e => {
      if (langRef.current && !langRef.current.contains(e.target)) setLangOpen(false);
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [langRef, setLangOpen]);

  return (
    <nav className={styles.nav(fullBackground)}>
      <motion.div
        className={styles.langContainer}
        onClick={handleLangOpen}
        variants={langVariants}
        animate={langOpen ? 'open' : 'initial'}
        ref={langRef}
      >
        {lang === 'en' ? (
          <>
            <div className="w-[20px] h-[20px] mb-4">
              <Image src="/flags/united-kingdom.svg" width={20} height={20} />
            </div>
            <div className="w-[20px] h-[20px]">
              <Image
                src="/flags/france.svg"
                width={20}
                height={20}
                onClick={handleLangChange('fr')}
              />
            </div>
          </>
        ) : (
          <>
            <div className="w-[20px] h-[20px] mb-4">
              <Image src="/flags/france.svg" width={20} height={20} />
            </div>
            <div className="w-[20px] h-[20px]">
              <Image
                src="/flags/united-kingdom.svg"
                width={20}
                height={20}
                onClick={handleLangChange('en')}
              />
            </div>
          </>
        )}
      </motion.div>
      <AnchorLink href="#header" className={styles.link}>
        {t('nav.home')}
      </AnchorLink>
      <AnchorLink href="#about" className={styles.link}>
        {t('nav.about')}
      </AnchorLink>
      <AnchorLink href="#showcase" className={styles.link}>
        {t('nav.experiences')}
      </AnchorLink>
      <AnchorLink href="#contact" className={styles.lastLink}>
        {t('nav.contact')}
      </AnchorLink>
    </nav>
  );
};

export default memo(Nav);
