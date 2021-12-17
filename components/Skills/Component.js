import React, { memo } from 'react';
import Image from 'next/image';

import { Container, Inner, Stack, Element } from './Styles';

const Skills = () => {
  return (
    <Container id="skills">
      <Inner>
        <Stack style={{ marginBottom: 32 }}>
          <a href="https://neo4j.com/" target="_blank">
            <Element>
              <Image src="/icons/neo4j.svg" alt="Neo4j Icon" width={110} height={120} />
            </Element>
          </a>
          <a href="https://graphql.org/" target="_blank">
            <Element>
              <Image src="/icons/graphql.png" alt="Graphql Icon" width={100} height={110} />
            </Element>
          </a>
          <a href="https://nodejs.org/" target="_blank">
            <Element>
              <Image src="/icons/node.svg" alt="Node Icon" width={100} height={110} />
            </Element>
          </a>
          <a href="https://www.apollographql.com/" target="_blank">
            <Element>
              <Image src="/icons/apollo.png" alt="Apollo Icon" width={110} height={110} />
            </Element>
          </a>
          <a href="https://nextjs.org/" target="_blank">
            <Element>
              <Image src="/icons/nextjs.png" alt="Next.js Icon" width={120} height={80} />
            </Element>
          </a>
          <a href="https://www.cypress.io/" target="_blank">
            <Element>
              <Image src="/icons/cypress.png" alt="Cypress Icon" width={120} height={57} />
            </Element>
          </a>
        </Stack>
        <Stack>
          <a href="https://www.mongodb.com/" target="_blank">
            <Element>
              <Image src="/icons/mongodb.svg" alt="Mongodb Icon" width={130} height={100} />
            </Element>
          </a>
          <a href="https://www.postgresql.org/" target="_blank">
            <Element>
              <Image src="/icons/elephant.png" alt="PostgreSQL Icon" width={100} height={100} />
            </Element>
          </a>
          <a href="https://reactnative.dev/" target="_blank">
            <Element>
              <Image src="/icons/react.svg" alt="React Native Icon" width={100} height={100} />
            </Element>
          </a>
          <a href="https://angular.io/" target="_blank">
            <Element>
              <Image src="/icons/angular.svg" alt="Angular Icon" width={100} height={100} />
            </Element>
          </a>
          <a href="https://ionic.io/" target="_blank">
            <Element>
              <Image src="/icons/ionic.svg" alt="Ionic Icon" width={100} height={90} />
            </Element>
          </a>
          <a href="https://socket.io/" target="_blank">
            <Element>
              <Image src="/icons/socketio.svg" alt="Socket.io Icon" width={100} height={100} />
            </Element>
          </a>
        </Stack>
      </Inner>
    </Container>
  );
};

export default memo(Skills);
