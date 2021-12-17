import React, { memo, useCallback, useState, useRef, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import Image from 'next/image';

import Gallery from './Gallery';
import { cardVariants } from './Animations';
import { Container, Inner, Details, Infos, LogoContainer, Title, Extras } from './Styles';

const Card = ({ image, title, date, info, details, companyInfos, features, ...props }) => {
  const [open, setOpen] = useState(false);

  const handleOpen = useCallback(() => {
    setOpen(v => !v);
  }, []);

  return (
    <Container
      {...props}
      variants={cardVariants}
      animate={open ? 'open' : 'initial'}
      onClick={handleOpen}
      open={open}
    >
      <Inner>
        <LogoContainer>
          <Image {...image} />
        </LogoContainer>
        <Infos>
          <Title>{title}</Title>
          <strong>{date}</strong> {info}
        </Infos>
        <Details>{details}</Details>
      </Inner>
      <AnimatePresence>
        {open && (
          <Extras
            key="extras"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div>{companyInfos ? companyInfos : null}</div>
            <div>{features ? features : null}</div>
          </Extras>
        )}
        {open && <Gallery key="gallery" />}
      </AnimatePresence>
    </Container>
  );
};

export default memo(Card);
