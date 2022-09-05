import styled from 'styled-components';

const Container = styled.div`
  width: 100vw;
  height: 70px;
  padding: 0 4vw 0 4vw;

  color: ${props => props.theme.colors.grayDefault};
  background: ${props => props.theme.colors.white};
  font: 400 18px Neo Sans Std, sans-serif;
  line-height: 24px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  @media only screen and (min-width: 768px) {
    height: 90px;
    border-bottom: 0.5px solid #cccccc;
    padding: 0 10vw 0 10vw;
  }
`;

export default Container;
