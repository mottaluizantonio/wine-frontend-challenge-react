import styled from 'styled-components';

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
  width: 90%;
  margin-left: 5%;
  border-bottom: 0.5px solid #d5d5d5;
  margin-bottom: 20px;

  @media only screen and (min-width: 768px) {
    display: none;
  }
`;
