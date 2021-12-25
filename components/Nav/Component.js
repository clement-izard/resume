import React, { memo, useCallback, useState, useEffect } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Nav = () => {
  const [fullBackground, setFullBackground] = useState(false);

  const handleScroll = useCallback(e => {
    setFullBackground(v => {
      if (window.pageYOffset < e.target.scrollingElement.clientHeight && v) return false;
      if (window.pageYOffset >= e.target.scrollingElement.clientHeight && !v) return true;
      return v;
    });
  }, []);
  useEffect(() => {
    if (window) window.addEventListener('scroll', handleScroll);
    return () => {
      if (window) window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed w-screen top-0 right-0 flex h-16 items-center justify-end z-10 ${
        fullBackground ? 'bg-zinc-900 shadow-xl' : ''
      }`}
    >
      <AnchorLink
        href="#header"
        className="text-zinc-400 text-lg mr-12 cursor-pointer hover:underline hover:text-white"
      >
        Home
      </AnchorLink>
      <AnchorLink
        href="#about"
        className="text-zinc-400 text-lg mr-12 cursor-pointer hover:underline hover:text-white"
      >
        About me
      </AnchorLink>
      <AnchorLink
        href="#showcase"
        className="text-zinc-400 text-lg mr-12 cursor-pointer hover:underline hover:text-white"
      >
        Showcase
      </AnchorLink>
      <AnchorLink
        href="#contact"
        className="text-zinc-400 text-lg mr-16 cursor-pointer hover:underline hover:text-white"
      >
        Contact
      </AnchorLink>
    </nav>
  );
};

export default memo(Nav);
