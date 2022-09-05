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

export const MainContent = styled.div`
  max-width: 832px;

  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;

  .top-search {
    margin: 0px 0px 20px 5%;
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
      margin: 0px 0px 30px 10px;
      font-size: 18px;
      color: ${props => props.theme.colors.grayDark};

      > span {
        color: ${props => props.theme.colors.grayDark};
      }
    }
  }
`;
