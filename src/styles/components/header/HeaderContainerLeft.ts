import styled from 'styled-components';

const ContainerLeft = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;

  svg:first-child {
    margin-right: 20px;
  }

  > ul {
    display: none;
  }

  li,
  svg {
    :hover {
      cursor: pointer;
    }
  }

  @media only screen and (min-width: 768px) {
    > svg:nth-child(1) {
      display: none;
    }

    > ul {
      margin-left: 5vw;
      list-style-type: none;

      justify-content: center;
      align-items: center;
      flex-direction: row;

      > li {
        border-bottom: 2px solid #ffffff;
        padding: 30px 0 30px 0;
      }

      li:nth-child(n + 2) {
        margin-left: 3vw;
      }

      li:nth-child(2) {
        color: ${props => props.theme.colors.tannatLight};
        border-bottom: 2px solid #d14b8f;
      }
    }
  }

  @media only screen and (min-width: 1080px) {
    ul {
      display: flex;
    }
  }
`;

export default ContainerLeft;
