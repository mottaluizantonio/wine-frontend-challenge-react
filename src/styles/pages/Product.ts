import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
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

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ContentLeft = styled.div`
  width: 40vw;
  padding-left: 4vw;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const ContentRight = styled.div`
  width: 40vw;
  padding-left: 4vw;

  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;

  > div {
    margin-bottom: 50px;
  }
`;

export const ProductHeader = styled.div`
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;

  > h1 {
    color: ${props => props.theme.colors.grayDarker};
    font-weight: 700;
    font-size: 28px;
    margin-top: 12px;
    margin-bottom: 12px;
  }
`;

export const RegionContainer = styled.div`
  color: ${props => props.theme.colors.tannatDefault};
  font-weight: 700;
  font-size: 14px;

  display: flex;
  justify-content: center;
  align-items: center;

  > svg {
    margin: 8px;
  }

  span:last-child {
    color: ${props => props.theme.colors.grayLight};
    font-weight: 400;
  }
`;

export const InfoContainer = styled.div`
  color: ${props => props.theme.colors.grayDefault};
  font-size: 14px;

  display: flex;
  justify-content: center;
  align-items: center;

  > img {
    height: 16px;
    width: 16px;
    margin-right: 10px;
  }

  > p {
    margin-right: 10px;
  }

  > svg {
    margin-right: 3px;
  }

  p:last-child {
    font-size: 12px;
  }
`;

export const PricesContainer = styled.div`
  > p {
    color: ${props => props.theme.colors.tannatDefault};
    font-weight: 900;
    font-size: 32px;
    margin-bottom: 8px;
  }

  > span {
    color: ${props => props.theme.colors.grayLight};
    font-weight: 700;
    font-size: 16px;
  }
`;

export const DescriptionContainer = styled.div`
  > h3 {
    color: ${props => props.theme.colors.grayDarker};
    font: 400 16px Neo Sans Std, sans-serif;
    line-height: 24px;
    margin-bottom: 8px;
  }

  > p {
    color: ${props => props.theme.colors.grayLighter};
    font: 400 14px Saira, sans-serif;
    line-height: 21px;
  }
`;

export const ButtonContainer = styled.div`
  width: 330px;
  height: 55px;
  color: ${props => props.theme.colors.white};
  background: ${props => props.theme.colors.greenButton};
  border-radius: 4px;

  display: flex;
  justify-content: center;
  align-items: center;

  > div {
    width: 50%;
    font-size: 24px;
    font-weight: 400;

    display: flex;
    justify-content: space-around;
    align-items: center;

    > p {
      font-size: 20px;
      font-weight: 600;
    }

    > p:nth-child(2) {
      position: relative;
      height: 27px;
      left: -35px;
    }

    > p:nth-last-child(2) {
      position: relative;
      height: 26px;
      left: 37px;
    }
  }

  > div:last-child {
    padding: 5px 0 5px;
    font-size: 16px;
    font-weight: 700;
    border-left: 1px solid rgba(255, 255, 255, 0.1);
  }
`;
