import React, { memo } from 'react';

import { Container, Link } from './Styles';

const Nav = () => {
  return (
    <Container>
      <Link href="#header">Home</Link>
      <Link href="#about">About me</Link>
      <Link href="#showcase">Showcase</Link>
    </Container>
  );
};

export default memo(Nav);
