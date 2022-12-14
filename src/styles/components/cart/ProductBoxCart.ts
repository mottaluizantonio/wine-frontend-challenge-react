import styled from 'styled-components';

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
