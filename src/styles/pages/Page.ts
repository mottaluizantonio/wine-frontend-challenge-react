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

export const SearchContainer = styled.div``;

export const Content = styled.div`
  max-width: 832px;

  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;

  > p {
    margin: 30px 0px 20px;
    font-size: 18px;
    color: ${props => props.theme.colors.grayLight};
    font-weight: 400;

    > span {
      color: ${props => props.theme.colors.grayCard};
      font-weight: 700;
    }
  }

  @media only screen and (min-width: 768px) {
    > p {
      margin: 30px 0px 30px;
      font-size: 18px;
      color: ${props => props.theme.colors.grayDark};

      > span {
        color: ${props => props.theme.colors.grayDark};
      }
    }
  }
`;

export const LineDiv = styled.div`
  width: 100%;
  border-bottom: 0.5px solid #d5d5d5;
  margin-bottom: 20px;

  @media only screen and (min-width: 768px) {
    display: none;
  }
`;

export const ProductsGrid = styled.div`
  width: 100%;
  font-weight: 700;

  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;

  .button-desktop {
    display: none;
  }

  @media only screen and (min-width: 768px) {
    .button-desktop {
      display: block;
    }
    .button-mobile {
      display: none;
    }
  }
`;

export const ProductBox = styled.div`
  width: 156px;
  height: 348px;
  margin-bottom: 16px;
  padding: 10px;
  background: ${props => props.theme.colors.white};
  box-shadow: 0px 9.73384px 14.6008px rgba(0, 0, 0, 0.1);

  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;

  img {
    height: 180px;
  }

  > svg {
    position: relative;
  }

  h2 {
    color: ${props => props.theme.colors.grayCard};
    font-size: 14px;
    text-align: center;
    letter-spacing: -0.222488px;
    margin: 10px 0;
  }

  > p {
    color: ${props => props.theme.colors.grayLight};
    font-size: 10px;
    text-transform: uppercase;
    font-weight: 400;
  }

  @media only screen and (min-width: 768px) {
    width: 256px;
    height: 333px;

    h2 {
      font-size: 16px;
      margin: 8px 0;
    }

    > p {
      font-size: 12px;
      font-weight: 700;
    }
  }
`;

export const PriceOff = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  p {
    font-size: 10px;
    text-align: center;
    text-decoration: line-through;
    color: ${props => props.theme.colors.grayLight};
    margin-right: 3px;
  }

  span {
    color: ${props => props.theme.colors.white};
    background: ${props => props.theme.colors.tavelDefault};
    font-size: 9px;
    text-transform: uppercase;
    text-align: center;
    border-radius: 1.94677px;
    padding: 1px 4px;
    margin-left: 3px;
  }

  @media only screen and (min-width: 768px) {
    p {
      font-size: 11px;
    }

    span {
      font-size: 10px;
    }
  }
`;
export const PricePartner = styled.div`
  margin: 10px 0;
  display: flex;
  justify-content: center;
  align-items: center;

  p {
    font-size: 10px;
    text-align: center;
    color: ${props => props.theme.colors.grayDefault};
    margin-right: 4px;
    text-transform: uppercase;
    font-weight: 400;
  }

  p:nth-child(2) {
    color: ${props => props.theme.colors.anotherTannat};
    font-size: 14px;
    font-weight: 700;
  }

  span {
    font-size: 16px;
    text-align: center;
    margin-left: 4px;
  }

  @media only screen and (min-width: 768px) {
    margin: 7px 0;
    align-items: baseline;

    p {
      font-size: 11px;
      color: ${props => props.theme.colors.grayCard};
      margin-right: 5px;
      font-weight: 700;
    }

    p:nth-child(2) {
      font-size: 15.57px;
    }

    span {
      font-size: 23px;
      margin-left: 5px;
    }
  }
`;

export const SealContainer = styled.div`
  background: ${props => props.theme.colors.grayDarker};
  border-radius: 50%;
  position: relative;
  bottom: -125px;
  left: -50px;
  margin-bottom: -44px;

  > svg {
    border-radius: 50%;
    position: relative;
    bottom: -3px;
  }

  @media only screen and (min-width: 768px) {
    bottom: -125px;
    left: 80px;
  }
`;

export const NavigationContainer = styled.div`
  color: ${props => props.theme.colors.anotherTannat};
  display: flex;
  justify-content: center;
  align-items: center;

  margin-bottom: 45px;

  @media only screen and (min-width: 768px) {
    > div {
      display: flex;
      justify-content: center;
      align-items: center;

      width: 40px;
      height: 40px;
      border: 1px solid #b6116e;
      border-radius: 3px;
      font-size: 16px;
      margin-right: 8px;

      :hover {
        cursor: pointer;
      }
    }

    p {
      font-size: 12px;
      margin-right: 8px;
    }

    .pointer {
      :hover {
        cursor: pointer;
      }
    }

    .no-pointer {
      :hover {
        cursor: default;
      }
    }

    .current-page {
      color: ${props => props.theme.colors.white};
      background: ${props => props.theme.colors.anotherTannat};
      width: 75px;
    }
  }
`;
