import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  padding: 0 5vw 0 5vw;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  @media only screen and (min-width: 768px) {
    padding: 0 10vw 0 10vw;
  }
`;

export const ContainerReturn = styled.div`
  display: none;

  @media only screen and (min-width: 768px) {
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
  }
`;

export const DivClickReturn = styled.div`
  display: flex;
  justify-content: left;
  align-items: flex-end;
  flex-direction: row;

  width: 100px;
  height: 100px;

  > svg {
    margin-right: 20px;
    margin-bottom: 15px;
  }

  > span {
    margin-bottom: 15px;
  }

  :hover {
    cursor: pointer;
  }
`;

export const Content = styled.div`
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ContentLeft = styled.div`
  display: none;

  @media only screen and (min-width: 768px) {
    width: 40vw;
    padding-left: 4vw;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
`;
