import styled from 'styled-components';

const Container = styled.div`
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

export default Container;
