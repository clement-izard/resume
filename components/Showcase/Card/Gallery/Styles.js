import styled from 'styled-components';

export const Container = styled.div`
  height: 400px;
  margin-right: 10%;
  position: relative;
  margin-top: 32px;
  margin-bottom: 94px;
  & > img {
    position: absolute;
    max-width: 100%;
  }
`;
export const Arrow = styled(({ position = 'left', ...props }) => <div {...props} />)`
  top: calc(50% - 20px);
  position: absolute;
  background: white;
  border-radius: 30px;
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  user-select: none;
  cursor: pointer;
  font-weight: bold;
  font-size: 18px;
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
