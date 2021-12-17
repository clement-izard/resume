import React, { memo } from 'react';
import Image from 'next/image';

import ProfileImg from 'public/profile.jpg';
import { Container, Inner, ImageContainer, Contact, AboutMe, Title, Paragraph } from './Styles';

const About = () => {
  return (
    <Container id="about">
      <Inner>
        <ImageContainer>
          <Image
            src={ProfileImg}
            alt="Profile picture"
            width={100}
            height={100}
            layout="responsive"
          />
        </ImageContainer>
        <AboutMe>
          <Title>About me</Title>
          <Paragraph>
            I love working with high performance frameworks that makes our lives easier. I'm
            thinking of the Neo4j + Apollo-Express + Next.js + Tailwind + Ionic + capacitor stack
            that can start and end a project quickly and efficiently while still being on the
            bleeding edge. I have always been passionate by computer science. Creating something
            from nothing with only the power of the mind will always astonish me.
          </Paragraph>
        </AboutMe>
        <Contact>
          <Title>Contact details</Title>
          <Paragraph>Github - Linkedin</Paragraph>
        </Contact>
      </Inner>
    </Container>
  );
};

export default memo(About);
