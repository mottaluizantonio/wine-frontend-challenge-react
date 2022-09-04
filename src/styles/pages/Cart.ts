import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  padding: 0 5vw 0 5vw;
  margin-top: 30px;

  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;

  @media only screen and (min-width: 768px) {
    padding: 0 10vw 0 10vw;
  }
`;

export const ProductsGrid = styled.div`
  width: 100%;
  font-weight: 700;
  margin-bottom: 150px;

  display: flex;
  align-items: center;
  flex-direction: column;

  > p {
    width: 315px;
    margin-bottom: 16px;
    font-size: 20px;
    font-weight: 400;
  }
`;

export const ProductBox = styled.div`
  width: 335px;
  height: 150px;
  margin-bottom: 16px;
  padding: 10px;
  background: ${props => props.theme.colors.white};
  box-shadow: 0px 9.73384px 14.6008px rgba(0, 0, 0, 0.1);

  display: flex;
  justify-content: space-between;
  align-items: center;

  .button-x {
    height: 20px;
    width: 20px;
    font-weight: 400;
    color: ${props => props.theme.colors.grayLighter};
    border: 1px solid #cccccc;
    border-radius: 50px;
    text-align: center;
    line-height: 14px;
    background: none;

    :hover {
      cursor: pointer;
    }
  }

  img {
    height: 80px;

    :hover {
      cursor: pointer;
    }
  }

  .product-left {
    height: 100%;
    width: 100px;
    display: flex;
    justify-content: space-around;
    align-items: flex-start;
    flex-direction: column;
    margin-left: -50px;
  }

  h2 {
    width: 200px;
    color: ${props => props.theme.colors.grayCard};
    font-size: 14px;
    font-weight: 400;
    margin-top: -20px;

    :hover {
      cursor: pointer;
    }
  }

  .product-quantity {
    width: 70px;
    height: 30px;
    border: 1px solid #cccccc;
    border-radius: 5px;
    font-size: 14px;
    font-weight: 400;

    display: flex;
    justify-content: space-around;
    align-items: center;

    position: relative;
    top: 15px;

    > button {
      width: 20px;
      font-size: 19px;
      text-align: center;
      border: none;
      background: none;

      :hover {
        cursor: pointer;
      }
    }
  }

  .product-right {
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    flex-direction: column;
  }

  > p {
    color: ${props => props.theme.colors.grayLight};
    font-size: 12px;
    text-transform: uppercase;
    font-weight: 700;
  }
`;

export const PricePartner = styled.div`
  margin: 10px 0;
  display: flex;
  justify-content: center;
  align-items: center;

  p {
    font-size: 12px;
    text-align: center;
    color: ${props => props.theme.colors.tannatAnother};
    margin-right: 4px;
    text-transform: uppercase;
    font-weight: 700;
  }

  span {
    font-size: 16px;
    text-align: center;
    margin-left: 4px;
  }
`;

export const FooterCart = styled.div`
  height: 150px;
  width: 100vw;
  padding: 0 5vw;
  background: ${props => props.theme.colors.white};
  box-shadow: 0px -5px 5px rgba(0, 0, 0, 0.0627185);

  position: fixed;
  bottom: 0;
  left: 0;

  display: flex;
  justify-content: center;
  align-items: flex-start;

  > div {
    > div {
      display: flex;
      justify-content: space-between;
      margin-top: 15px;

      p:nth-child(1) {
        color: ${props => props.theme.colors.grayDark};
        font-weight: 700;
      }
      p:nth-child(2) {
        color: ${props => props.theme.colors.tannatDefault};
        font-size: 24px;
        font-weight: 700;
      }
    }

    > p {
      margin: 15px 0px;
      font-size: 12px;
      text-align: center;
      color: ${props => props.theme.colors.grayLighter};
    }
  }
`;

export const EmptyCart = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  > span {
    color: ${props => props.theme.colors.graySilver};
    font-size: 28px;
    font-weight: 700;
    margin: 40px 0 20px;
  }

  > p {
    width: 300px;
    color: ${props => props.theme.colors.grayDarker};
    font-size: 24px;
    font-weight: 700;
    text-align: center;
  }
`;
