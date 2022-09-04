import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  padding: 0;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  @media only screen and (min-width: 768px) {
    padding: 0 10vw 0 10vw;
  }
`;

export const Content = styled.div`
  margin-top: 30px;

  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: row;
`;

export const SearchContainer = styled.div`
  min-width: 136px;
  display: none;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;

  margin-right: 100px;

  div,
  input {
    :hover {
      cursor: pointer;
    }
  }

  h4 {
    color: ${props => props.theme.colors.black};
    font: 700 20px Neo Sans Std, sans-serif;
    margin-bottom: 30px;
  }

  p {
    color: ${props => props.theme.colors.blackLight};
    font-size: 18px;
    font-weight: 700;
    margin-bottom: 30px;
  }

  .container {
    display: block;
    position: relative;
    padding-left: 35px;
    margin-bottom: 26px;
    cursor: pointer;
    color: ${props => props.theme.colors.grayCard};
    font-size: 14px;
    font-weight: 400;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }

  .container input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
  }

  .checkmark {
    position: absolute;
    top: 0;
    left: 0;
    height: 16px;
    width: 16px;
    border-radius: 50%;
    border: 2px solid #8888;
    background: ${props => props.theme.colors.background};
  }

  .container:hover input ~ .checkmark {
    background: ${props => props.theme.colors.graySilver};
  }

  .container input:checked ~ .checkmark {
    background: ${props => props.theme.colors.tannatDefault};
  }

  .checkmark:after {
    content: '';
    position: absolute;
    display: none;
  }

  .container input:checked ~ .checkmark:after {
    display: block;
  }

  @media only screen and (min-width: 940px) {
    display: flex;
  }
`;

export const MainContent = styled.div`
  max-width: 832px;

  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;

  > p {
    margin: 0px 0px 20px 5%;
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
      margin: 0px 0px 30px 10px;
      font-size: 18px;
      color: ${props => props.theme.colors.grayDark};

      > span {
        color: ${props => props.theme.colors.grayDark};
      }
    }
  }
`;

export const LineDiv = styled.div`
  width: 90%;
  margin-left: 5%;
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
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;

  .button {
    margin-left: 10px;
    margin-right: 10px;
  }

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
  margin: 0px 10px 16px;
  padding: 10px;
  background: ${props => props.theme.colors.white};
  box-shadow: 0px 9.73384px 14.6008px rgba(0, 0, 0, 0.1);

  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;

  :hover {
    cursor: pointer;
  }

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
    color: ${props => props.theme.colors.tannatAnother};
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
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const NavigationButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  color: ${props => props.theme.colors.tannatAnother};
  margin-bottom: 45px;

  > div {
    display: flex;
    justify-content: center;
    align-items: center;

    width: 40px;
    height: 40px;
    border: 1px solid #b6116e;
    border-radius: 3px;
    font-size: 16px;
    margin-right: 7px;

    :hover {
      cursor: pointer;
    }
  }

  p {
    font-size: 12px;
    margin-right: 7px;
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
    background: ${props => props.theme.colors.tannatAnother};
    width: 75px;
  }

  .last {
    margin-right: 0px;
  }
`;
