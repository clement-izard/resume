import React, { memo } from 'react';

import Card from './Card';
import { Container, Inner, Divider } from './Styles';
import { education, experiences } from './Tools';

const Showcase = () => {
  return (
    <Container id="showcase">
      <Inner>
        {experiences.map(e => (
          <Card {...e} key={e.title} />
        ))}
        <Divider />
        {education.map(e => (
          <Card {...e} key={e.title} />
        ))}
      </Inner>
    </Container>
  );
};

export default memo(Showcase);
