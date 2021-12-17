import styled from 'styled-components';

import { darkBackground } from 'styles/Colors';

export const Container = styled.div`
  background-color: ${darkBackground};
  padding: 100px 0;
`;
export const Inner = styled.div`
  width: 70%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`;
export const Divider = styled.div`
  background-color: white !important;
  width: 100%;
  height: 1px;
  margin: 56px 0;
`;
