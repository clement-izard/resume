import styled from 'styled-components';

import { textColor, darkBackground } from 'styles/Colors';
import { motion } from 'framer-motion';

export const Container = styled(({ noOpen, noMargin, open, innerRef, custom, ...props }) => (
  <motion.div {...props} ref={innerRef} custom={custom} />
))`
  position: relative;
  background-color: ${darkBackground};
  padding: 18px 18px 18px 10%;
  cursor: pointer;
  ${({ noMargin }) => !noMargin && `margin-bottom: 112px;`}
  overflow: hidden;
  min-height: 150px;
  &:hover {
    box-shadow: 3px 3px 18px 0 rgba(0, 0, 0, 0.9);
  }
`;
export const Inner = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  grid-template-rows: repeat(2, auto);
  grid-template-areas:
    'logo infos'
    'logo details';
  grid-column-gap: 5%;
  grid-row-gap: 24px;
`;
export const Title = styled.h2`
  color: white;
  margin-bottom: 12px;
`;
export const LogoContainer = styled(({ extraPadding, ...props }) => <div {...props} />)`
  grid-area: logo;
  min-width: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const Infos = styled.div`
  color: ${textColor};
  grid-area: infos;
  & > strong {
    margin-right: 24px;
  }
`;
export const Details = styled.div`
  color: ${textColor};
  grid-area: details;
`;
export const Extras = styled(motion.div)`
  color: ${textColor};
  margin-top: 24px;
  padding-right: 10%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 5%;
`;
