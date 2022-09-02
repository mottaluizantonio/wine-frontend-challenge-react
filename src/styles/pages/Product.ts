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
  align-items: center;
  flex-direction: row;

  > svg {
    margin-right: 20px;
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

export const ContentRight = styled.div`
  width: 90vw;
  margin-top: 30px;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  > div {
    margin-bottom: 16px;
  }

  > img {
    height: 330px;
    margin-bottom: 16px;
  }

  @media only screen and (min-width: 768px) {
    width: 40vw;
    padding-left: 4vw;
    margin-top: 0px;

    align-items: flex-start;

    > div {
      margin-bottom: 50px;
    }

    > img {
      display: none;
    }
  }
`;

export const ProductHeader = styled.div`
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  > h1 {
    color: ${props => props.theme.colors.grayDarker};
    font-weight: 700;
    font-size: 20px;
    margin-top: 8px;
    margin-bottom: 12px;
    text-align: center;
  }

  @media only screen and (min-width: 768px) {
    align-items: flex-start;

    > h1 {
      font-size: 28px;
      margin-top: 12px;
      margin-bottom: 12px;
      text-align: start;
    }
  }
`;

export const RegionContainer = styled.div`
  color: ${props => props.theme.colors.tannatDefault};
  font-weight: 400;
  font-size: 12px;

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

  @media only screen and (min-width: 768px) {
    font-weight: 700;
    font-size: 14px;
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
    display: none;
  }

  p:last-child {
    display: none;
  }

  @media only screen and (min-width: 768px) {
    > svg {
      display: block;
      margin-right: 3px;
    }

    p:last-child {
      display: block;
      font-size: 12px;
    }
  }
`;

export const PricesContainer = styled.div`
  display: none;

  @media only screen and (min-width: 768px) {
    display: block;

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
  }
`;

export const DescriptionContainer = styled.div`
  > h3 {
    color: ${props => props.theme.colors.grayDarker};
    font: 700 20px Neo Sans Std, sans-serif;
    line-height: 24px;
    margin-bottom: 8px;
  }

  h3:nth-child(2) {
    display: none;
  }

  > p {
    color: ${props => props.theme.colors.grayLighter};
    font: 400 16px Saira, sans-serif;
    line-height: 24px;
    margin-bottom: 90px;
  }

  @media only screen and (min-width: 768px) {
    > h3 {
      font-size: 16px;
      font-weight: 400;
    }

    h3:nth-child(1) {
      display: none;
    }

    h3:nth-child(2) {
      display: block;
    }

    > p {
      font-size: 14px;
      line-height: 21px;
      margin-bottom: 0px;
    }
  }
`;

export const ButtonContainer = styled.div`
  display: none;

  @media only screen and (min-width: 768px) {
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
  }
`;

export const FooterMobile = styled.div`
  height: 80px;
  width: 100vw;
  padding: 0 5vw 0 5vw;
  background: ${props => props.theme.colors.white};
  box-shadow: 0px -5px 5px rgba(0, 0, 0, 0.0627185);

  position: fixed;
  bottom: 0;

  display: flex;
  justify-content: space-between;
  align-items: center;

  /* > div {
  } */
  @media only screen and (min-width: 768px) {
    display: none;
  }
`;

export const PriceOffContainer = styled.div`
  width: 50px;
  height: 15px;
  color: ${props => props.theme.colors.white};
  background: ${props => props.theme.colors.cheninDefault};
  text-transform: uppercase;
  font-size: 10px;
  font-weight: 400;

  display: flex;
  justify-content: center;
  align-items: center;

  position: absolute;
  top: -7px;
`;

export const PriceDivMobile = styled.div`
  color: ${props => props.theme.colors.grayDefault};
  font-weight: 700;

  display: flex;
  align-items: flex-start;
  flex-direction: column;

  div:first-child {
    font-size: 12px;
    text-decoration: line-through;
  }

  div:nth-child(2) {
    color: ${props => props.theme.colors.tannatDefault};
    font-size: 26px;
  }

  div:nth-child(3) {
    font-size: 10px;
    text-transform: uppercase;
  }
`;