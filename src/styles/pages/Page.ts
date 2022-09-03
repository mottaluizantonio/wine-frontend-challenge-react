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

export const Content = styled.div`
  /* width: 100%; */
  max-width: 832px;

  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;

  > p {
    margin: 30px 0px 30px;
    font-size: 18px;
    color: ${props => props.theme.colors.grayDark};

    > span {
      font-weight: 700;
    }
  }
`;

export const ProductsGrid = styled.div`
  width: 100%;
  font-weight: 700;

  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
`;

export const ProductBox = styled.div`
  width: 256px;
  height: 333px;
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

  h2 {
    color: ${props => props.theme.colors.grayCard};
    font-size: 16px;
    text-align: center;
    letter-spacing: -0.222488px;
    margin: 7px 0;
  }

  > p {
    color: ${props => props.theme.colors.grayLight};
    font-size: 12px;
    text-transform: uppercase;
  }
`;

// export const Product = styled.div`
//   display: flex;
//   align-items: center;
// `;

export const PriceOff = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  p {
    font-size: 11px;
    text-align: center;
    text-decoration: line-through;
    color: ${props => props.theme.colors.grayLight};
    margin-right: 3px;
  }

  span {
    color: ${props => props.theme.colors.white};
    background: ${props => props.theme.colors.tavelDefault};
    font-size: 10px;
    text-transform: uppercase;
    text-align: center;
    border-radius: 1.94677px;
    padding: 1px 4px;
    margin-left: 3px;
  }
`;
export const PricePartner = styled.div`
  margin: 7px 0;
  display: flex;
  justify-content: center;
  align-items: baseline;

  p {
    font-size: 11px;
    text-align: center;
    color: ${props => props.theme.colors.grayCard};
    margin-right: 5px;
    text-transform: uppercase;
  }

  p:nth-child(2) {
    color: ${props => props.theme.colors.anotherTannat};
    font-size: 15.57px;
  }

  span {
    font-size: 23px;
    text-align: center;
    margin-left: 5px;
  }
`;
