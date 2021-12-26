import React, { memo, useCallback, useState, useRef, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import Image from 'next/image';

import Gallery from './Gallery';
import { cardVariants } from './Animations';
import { Container, Inner, Logo, Infos, Details, Extras } from './Styles';

const Card = ({ logo, title, date, info, details, companyInfos, features, images, ...props }) => {
  const closedRef = useRef(null);
  const [open, setOpen] = useState(false);
  const [closedHeight, setClosedHeight] = useState(0);

  const handleOpen = useCallback(() => {
    setOpen(v => !v);
  }, []);

  useEffect(() => {
    if (closedRef.current) {
      const { height } = closedRef.current?.getBoundingClientRect();
      setClosedHeight(height);
      window.addEventListener('resize', () => {
        const { height } = closedRef.current?.getBoundingClientRect();
        setClosedHeight(height);
      });
    }
  }, [closedRef]);

  return (
    <Container
      {...props}
      variants={cardVariants}
      animate={open ? 'open' : 'initial'}
      onClick={handleOpen}
      open={open}
      custom={closedHeight}
      className="relative bg-zinc-900 cursor-pointer overflow-hidden py-4 px-6"
    >
      <Inner className="flex flex-col align-center md:grid md:gap-5" ref={closedRef}>
        <Logo className="min-w-[150px] flex items-center justify-center mb-6 md:mb-0 md:mx-12">
          <Image {...logo} />
        </Logo>
        <Infos className="text-zinc-400">
          <h2 className="text-white font-semibold mb-6">{title}</h2>
          <strong className="mr-6">{date}</strong> {info}
        </Infos>
        <Details className="mt-6 md:mt-0 text-zinc-400">{details}</Details>
      </Inner>
      <AnimatePresence>
        {!!(open && images) && <Gallery key="gallery" images={images} />}
        {open && (
          <Extras
            key="extras"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="mt-6 text-zinc-400 md:flex md:justify-between"
          >
            {features ? <div className="mb-6 md:mx-12 min-w-[30%]">{features}</div> : null}
            {companyInfos ? <div className="sm:mx-16 mb-4">{companyInfos}</div> : null}
          </Extras>
        )}
      </AnimatePresence>
    </Container>
  );
};

export default memo(Card);
