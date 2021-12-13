import Image from 'next/image';
import React, { memo } from 'react';

import HeaderImg from 'public/header.jpg';
import { Container, Title, Subtitle, Arrow, Texts } from './Styles';

const Header = () => {
  return (
    <Container id="header">
      <Image
        src={HeaderImg}
        placeholder="blur"
        alt="Picture of the earth at night"
        priority
        layout="fill"
      />
      <Texts>
        <Title>Hi, I'm Clement</Title>
        <Subtitle>yet another fullstack engineer</Subtitle>
      </Texts>
      <Arrow />
    </Container>
  );
};

export default memo(Header);
