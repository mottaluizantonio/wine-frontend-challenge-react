import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 90px;
  padding: 0 10vw 0 10vw;
  border-bottom: 0.5px solid #cccccc;

  color: ${props => props.theme.colors.grayDefault};
  background: ${props => props.theme.colors.white};
  font: 400 18px Neo Sans Std, sans-serif;
  line-height: 24px;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ContainerLeft = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;

  > ul {
    margin-left: 5vw;
    list-style-type: none;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;

    > li {
      border-bottom: 2px solid #ffffff;
      padding: 30px 0 30px 0;
    }

    li:nth-child(n + 2) {
      margin-left: 3vw;
    }

    li:nth-child(2) {
      color: ${props => props.theme.colors.lightTannat};
      border-bottom: 2px solid #d14b8f;
    }
  }
`;

export const ContainerRight = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  svg:nth-child(n + 2) {
    margin-left: 3vw;
  }
`;
