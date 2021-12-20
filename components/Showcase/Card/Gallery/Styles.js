import styled from 'styled-components';

export const Container = styled.div`
  & > img {
    position: absolute;
    max-width: 100%;
  }
`;
export const Arrow = styled(({ position = 'left', ...props }) => <div {...props} />)`
  top: calc(50% - 20px);
  border-radius: 30px;
  z-index: 2;
  ${({ position }) =>
    position === 'left'
      ? `
		left: 10px;
	  transform: scale(-1);
	`
      : `
	  right: 10px;
	`}
`;
