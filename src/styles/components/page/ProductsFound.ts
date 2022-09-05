import styled from 'styled-components';

export const ProductsFoundContainer = styled.div`
  max-width: 832px;

  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;

  .top-search {
    margin: 0px 0px 20px 5vw;
    font-size: 18px;
    color: ${props => props.theme.colors.grayLight};
    font-weight: 400;

    > span {
      color: ${props => props.theme.colors.grayCard};
      font-weight: 700;
    }

    > p {
      margin-bottom: 20px;
    }
  }

  @media only screen and (min-width: 768px) {
    .top-search {
      width: 100%;
      margin: 0px 0px 30px 10px;
      font-size: 18px;
      color: ${props => props.theme.colors.grayDark};

      > span {
        color: ${props => props.theme.colors.grayDark};
      }
    }
  }
`;

export const EmptyProducts = styled.div`
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

export const LineDiv = styled.div`
  width: 90vw;
  margin-left: 5%;
  border-bottom: 0.5px solid #d5d5d5;
  margin-bottom: 20px;

  @media only screen and (min-width: 768px) {
    display: none;
  }
`;
