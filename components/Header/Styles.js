import styled from 'styled-components';

export const Container = styled.main`
  position: relative;
  width: 100vw;
  height: 100vh;
  background-color: #333;
`;
export const Texts = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: white;
  text-shadow: 2px 2px 3px black;
`;
export const Title = styled.h1`
  margin-bottom: 12px;
  font-size: 5rem;
`;
export const Subtitle = styled.sub`
  font-size: 1.5rem;
  font-style: italic;
`;
export const Arrow = styled.div``;
