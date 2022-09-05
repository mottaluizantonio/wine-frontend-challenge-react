import styled from 'styled-components';

export const FooterMobile = styled.div`
  height: 80px;
  width: 100vw;
  padding: 0 5vw;
  background: ${props => props.theme.colors.white};
  box-shadow: 0px -5px 5px rgba(0, 0, 0, 0.0627185);

  position: fixed;
  bottom: 0;

  display: flex;
  justify-content: space-between;
  align-items: center;

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
