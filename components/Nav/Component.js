import React, { memo, useCallback, useState, useEffect } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Nav = () => {
  const [fullBackground, setFullBackground] = useState(false);

  const handleScroll = useCallback(
    e => {
      setFullBackground(v => {
        if (window.pageYOffset < e.target.scrollingElement.clientHeight && v) return false;
        if (window.pageYOffset >= e.target.scrollingElement.clientHeight && !v) return true;
        return v;
      });

      // if (window.pageYOffset < e.target.scrollingElement.clientHeight && fullBackground)
      //   setFullBackground(false);
      // if (window.pageYOffset >= e.target.scrollingElement.clientHeight && !fullBackground)
      //   setFullBackground(true);

      // console.log(window.pageYOffset, e.target.scrollingElement.clientHeight);
    },
    [fullBackground],
  );
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
        className="text-white text-lg mr-12 cursor-pointer hover:underline"
      >
        Home
      </AnchorLink>
      <AnchorLink href="#about" className="text-white text-lg mr-12 cursor-pointer hover:underline">
        About me
      </AnchorLink>
      <AnchorLink
        href="#showcase"
        className="text-white text-lg mr-12 cursor-pointer hover:underline"
      >
        Showcase
      </AnchorLink>
      <AnchorLink
        href="#contact"
        className="text-white text-lg cursor-pointer hover:underline mr-16"
      >
        Contact
      </AnchorLink>
    </nav>
  );
};

export default memo(Nav);
