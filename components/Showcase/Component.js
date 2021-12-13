import React, { memo } from 'react';
import Image from 'next/image';

import { Container, Inner, Title, Card, LogoContainer, Infos, Details, Divider } from './Styles';

const Showcase = () => {
  return (
    <Container id="showcase">
      <Inner>
        <Card>
          <LogoContainer>
            <Image src="/icons/medvice.svg" alt="Medvice icon" width={150} height={50} />
          </LogoContainer>
          <Infos>
            <Title>MIA Suite - Front end lead developer</Title>
            <strong>2020-2021</strong> Full remote - 6 months extended to 20
          </Infos>
          <Details>In charge of 3 web apps and a mobile app (React, React native)</Details>
        </Card>
        <Card noOpen>
          <LogoContainer>
            <Image src="/icons/sii.svg" alt="Sii icon" width={150} height={100} />
          </LogoContainer>
          <Infos>
            <Title>SII / Hager - Front end consultant</Title>
            <strong>2019-2020</strong> On site - 7 months
          </Infos>
          <Details>Upgraded a confidential EV visualization app (Knockout.js, Next.js)</Details>
        </Card>
        <Card noOpen>
          <LogoContainer>
            <Image src="/icons/whereyoulove.svg" alt="Whereyoulove icon" width={150} height={100} />
          </LogoContainer>
          <Infos>
            <Title>Where you love - Front end lead developer</Title>
            <strong>2017-2019</strong> Half remote - 2 years
          </Infos>
          <Details>Integration of new design from scratch (React) - Company is sold</Details>
        </Card>
        <Card noOpen>
          <LogoContainer>
            <Image src="/icons/hickup.png" alt="Hickup icon" width={150} height={45} />
          </LogoContainer>
          <Infos>
            <Title>Hickup - Front end intern</Title>
            <strong>2015-2016</strong> On site - 6 months - internship
          </Infos>
          <Details>
            Upgraded tablet apps to allow dynamic rebranding (Angular, Ionic) -{' '}
            <a
              href="https://www.mobilemarketingmagazine.com/showpad-launches-experience-following-acquisition-of-hickup"
              target="_blank"
              style={{ textDecoration: 'underline' }}
            >
              Company acquired by Showpad
            </a>
          </Details>
        </Card>
        <Card noOpen noMargin>
          <LogoContainer>
            <Image src="/icons/orange.png" alt="Orange icon" width={100} height={100} />
          </LogoContainer>
          <Infos>
            <Title>Orange - Fullstack intern</Title>
            <strong>2013</strong> On site - 6 months - internship
          </Infos>
          <Details>
            Creation of a seller rating dashboard based on their sells / complaints (Access, Php,
            SQL, jQuery)
          </Details>
        </Card>
        <Divider />
        <Card noOpen>
          <LogoContainer>
            <Image src="/icons/epitech.png" alt="Epitech icon" width={150} height={60} />
          </LogoContainer>
          <Infos>
            <Title>Epitech - Student</Title>
            <strong>2012-2018</strong> Master’s Degree in computer science
          </Infos>
          <Details>
            Creation of a web application for graduation project (MySQL, Koa.js, Socket.io, React)
          </Details>
        </Card>
        <Card noOpen noMargin>
          <LogoContainer>
            <Image src="/icons/ahlia.png" alt="Ahlia university icon" width={100} height={90} />
          </LogoContainer>
          <Infos>
            <Title>Ahlia University - Student</Title>
            <strong>2016-2017</strong> 9 months study in a foreign country
          </Infos>
          <Details>
            Creation of a web application for graduation project (MySQL, Koa.js, Socket.io, React)
          </Details>
        </Card>
      </Inner>
    </Container>
  );
};

export default memo(Showcase);
