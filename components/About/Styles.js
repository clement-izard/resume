import styled from 'styled-components';

export const Container = styled.section`
  background-color: rgb(32, 35, 36);
  padding: 100px 0;
`;
export const Inner = styled.div`
  width: 60%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 5fr;
  grid-template-rows: repeat(2, 1fr);
  grid-template-areas:
    'image about'
    'image contact';
  grid-row-gap: 42px;
  grid-column-gap: 10%;
`;
export const ImageContainer = styled.div`
  grid-area: image;
`;
export const AboutMe = styled.div`
  grid-area: about;
`;
export const Contact = styled.div`
  grid-area: contact;
`;
export const Title = styled.h2`
  color: white;
  padding-bottom: 16px;
`;
export const Paragraph = styled.p`
  color: rgb(155, 146, 133);
`;
