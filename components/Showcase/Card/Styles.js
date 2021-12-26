import styled from 'styled-components';

import { motion } from 'framer-motion';

export const Container = styled(({ noOpen, noMargin, open, innerRef, custom, ...props }) => (
  <motion.div {...props} ref={innerRef} custom={custom} />
))`
  min-height: calc(2rem + ${({ custom }) => custom}px); // Padding + inner height
  ${({ noMargin }) => !noMargin && `margin-bottom: 112px;`}
  ${({ open }) =>
    open &&
    `
    box-shadow: 3px 3px 18px 0 rgba(0, 0, 0, 0.9);
  `}
  &:hover {
    box-shadow: 3px 3px 18px 0 rgba(0, 0, 0, 0.9);
  }
  transition: box-shadow 250ms ease-in;
`;
export const Inner = styled.div`
  grid-template-columns: auto 1fr;
  grid-template-rows: repeat(2, auto);
  grid-template-areas:
    'logo infos'
    'logo details';
`;
export const Logo = styled.div`
  grid-area: logo;
`;
export const Infos = styled.div`
  grid-area: infos;
`;
export const Details = styled.p`
  grid-area: details;
`;
export const Extras = styled(motion.div)``;
