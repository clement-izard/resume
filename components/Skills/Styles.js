import styled from 'styled-components';
import { motion } from 'framer-motion';

import { greyBackground, textColor } from 'styles/Colors';

export const Container = styled.section`
  background-color: ${greyBackground};
  padding: 100px 0;
`;
export const Inner = styled.div`
  width: 70%;
  margin: 0 auto;
`;
export const Title = styled.h2`
  color: white;
  text-align: center;
  margin-bottom: 38px;
`;
export const Stack = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
export const Element = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 152px;
  padding-bottom: 24px;
  & > span {
    overflow: visible !important;
    transition: all 250ms ease-out;
    & > img {
      filter: drop-shadow(0px 0px 7px white);
      padding: 12px !important;
    }
  }
  &:hover > span {
    filter: drop-shadow(0px 0px 14px white);
    transition: all 250ms ease-out;
  }
`;
export const Label = styled.span`
  position: absolute;
  bottom: 0;
  color: ${textColor};
`;
