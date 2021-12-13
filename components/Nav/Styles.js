import AnchorLink from 'react-anchor-link-smooth-scroll';
import styled from 'styled-components';

export const Container = styled.nav`
  position: fixed;
  top: 0;
  right: 0;
  width: auto;
  z-index: 1;
  display: flex;
  height: 70px;
  align-items: center;
  font-size: 1.3em;
`;
export const Link = styled(AnchorLink)`
  color: white;
  margin-right: 60px;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
  &:last-child {
    margin-right: 30px;
  }
`;
