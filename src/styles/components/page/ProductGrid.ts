import styled from 'styled-components';

export const Container = styled.div`
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
