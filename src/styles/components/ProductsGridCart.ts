import styled from 'styled-components';

export const Container = styled.div`
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

export const EmptyCartContainer = styled.div`
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
