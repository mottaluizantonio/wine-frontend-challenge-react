import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 70px;
  padding: 0 4vw 0 4vw;

  color: ${props => props.theme.colors.grayDefault};
  background: ${props => props.theme.colors.white};
  font: 400 18px Neo Sans Std, sans-serif;
  line-height: 24px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  @media only screen and (min-width: 768px) {
    height: 90px;
    border-bottom: 0.5px solid #cccccc;
    padding: 0 10vw 0 10vw;
  }
`;

export const ContainerLeft = styled.div`
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
    svg:first-child {
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

  @media only screen and (min-width: 940px) {
    ul {
      display: flex;
    }
  }
`;

export const ContainerRight = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    :hover {
      cursor: pointer;
    }
  }

  svg:nth-child(-n + 3) {
    display: none;
  }

  svg:nth-child(4) {
    margin-right: 20px;
  }

  span {
    color: ${props => props.theme.colors.chardonnay};
    font-weight: 700;
    font-size: 16px;
    position: absolute;
    right: 5vw;
    top: 42px;
  }

  @media only screen and (min-width: 768px) {
    svg:nth-child(n + 3) {
      margin-left: 3vw;
    }

    svg:nth-child(-n + 2) {
      display: block;
    }

    svg:nth-child(4) {
      display: none;
    }

    span {
      right: 10.5vw;
      top: 50px;
    }
  }
`;
