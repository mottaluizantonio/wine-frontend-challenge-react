import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 660px;
  padding: 0 10vw 0 10vw;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const ContainerReturn = styled.div`
  width: 100%;
  height: 85px;

  color: ${props => props.theme.colors.grayDarker};
  font: 400 20px Neo Sans Std, sans-serif;

  display: flex;
  justify-content: left;
  align-items: center;

  > svg {
    margin-right: 20px;
  }
`;

export const Content = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

export const ContentLeft = styled.div`
  width: 40vw;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const ContentRight = styled.div`
  width: 40vw;

  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;

  > h1 {
    color: ${props => props.theme.colors.grayDarker};
    font-weight: 700;
    font-size: 28px;
  }
`;

export const RegionContainer = styled.div`
  color: ${props => props.theme.colors.tannatDefault};
  font-weight: 700;
  font-size: 14px;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;

  > svg {
    margin: 8px;
  }

  span:last-child {
    color: ${props => props.theme.colors.grayLight};
    font-weight: 400;
  }
`;
