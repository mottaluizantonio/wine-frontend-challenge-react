import styled from 'styled-components';

const ContainerFooterCart = styled.div`
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

export default ContainerFooterCart;
