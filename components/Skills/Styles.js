import styled from 'styled-components';
import { motion } from 'framer-motion';

import { greyBackground, textColor } from 'styles/Colors';

export const Element = styled.div`
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
