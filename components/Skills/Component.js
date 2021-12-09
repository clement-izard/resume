import React, { memo } from 'react';
import Image from 'next/image';

import NImg from 'public/icons/graphql.png';
import GraphqlImg from 'public/icons/graphql.png';

import { Container, Inner, Title, Stack, Subtitle } from './Styles';

const Skills = () => {
  return (
    <Container>
      <Inner>
        <Title>Favorite stack</Title>
        <Stack>
          <Image src={GraphqlImg} alt="Graphql Icon" width={100} height={110} />
          <Image src={GraphqlImg} alt="Graphql Icon" width={100} height={110} />
          <Image src={GraphqlImg} alt="Graphql Icon" width={100} height={110} />
          <Image src={GraphqlImg} alt="Graphql Icon" width={100} height={110} />
          <Image src={GraphqlImg} alt="Graphql Icon" width={100} height={110} />
        </Stack>
      </Inner>
    </Container>
  );
};

export default memo(Skills);
