import styled from 'styled-components';

import { darkBackground, textColor } from 'styles/Colors';

export const Container = styled.section`
  // background-color: ${darkBackground};
  // padding: 100px 0;
`;
export const Inner = styled.div`
  //width: 60%;
  //margin: 0 auto;
  //display: grid;
  //grid-template-columns: 1fr 5fr;
  grid-template-columns: repeat(2, auto);
  grid-template-rows: repeat(2, auto);
  //grid-template-areas:
  //  'image about'
  //  'image contact';
  //grid-row-gap: 42px;
  //grid-column-gap: 10%;
`;
export const ImageContainer = styled.div`
  //grid-area: image;
`;
export const AboutMe = styled.div`
  //grid-area: about;
`;
export const Contact = styled.div`
  //grid-area: contact;
`;
export const Title = styled.h2`
  //color: white;
  //padding-bottom: 16px;
`;
export const Paragraph = styled.p`
  color: ${textColor};
`;
