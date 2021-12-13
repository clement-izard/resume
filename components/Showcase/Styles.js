import styled from 'styled-components';

import { darkBackground, textColor } from 'styles/Colors';

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
export const Title = styled.h2`
  color: white;
  margin-bottom: 12px;
`;
export const Divider = styled.div`
  background-color: white !important;
  width: 100%;
  height: 1px;
  margin: 56px 0;
`;
export const Card = styled(({ noOpen, noMargin, ...props }) => <div {...props} />)`
  display: grid;
  grid-template-columns: auto 1fr;
  grid-template-rows: repeat(2, auto);
  grid-template-areas:
    'logo infos'
    'logo details';
  grid-column-gap: 5%;
  grid-row-gap: 24px;
  padding: 18px 18px 18px 72px;
  ${({ noOpen }) =>
    !noOpen &&
    `
	  cursor: pointer;
	  &:hover {
	    box-shadow: 3px 3px 6px 0 rgba(0, 0, 0, 0.8);
	    transition: all 250ms ease-out;
	  }
	`}
  transition: all 250ms ease-in;
  ${({ noMargin }) =>
    !noMargin &&
    `
	  margin-bottom: 112px;
	`}
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
