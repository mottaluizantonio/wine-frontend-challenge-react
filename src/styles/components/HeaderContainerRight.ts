import styled from 'styled-components';

const ContainerRight = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    :hover {
      cursor: pointer;
    }
  }

  svg:nth-child(4) {
    margin-right: 20px;
  }

  .search {
    display: flex;
    justify-content: center;
    align-items: center;

    width: 100vw;
    height: 50px;
    color: ${props => props.theme.colors.grayDefault};
    background: ${props => props.theme.colors.white};
    opacity: 0;
    box-shadow: 0px 9.73384px 14.6008px rgba(0, 0, 0, 0.1);

    position: absolute;
    right: 0px;
    top: 70px;

    form {
      display: flex;
      justify-content: center;
      align-items: center;
    }

    input {
      width: 90vw;
      padding: 10px 20px;
      margin-right: -10vw;
      border: 1px solid #c81a78;
      outline: none;
    }

    .button-search {
      position: relative;
      top: 3px;
    }
  }

  .search.active {
    opacity: 1;
    visibility: visible;
  }

  .search-container button {
    border: none;
    background: none;
  }

  span {
    color: ${props => props.theme.colors.chardonnay};
    font-weight: 700;
    font-size: 16px;
    position: absolute;
    right: 5vw;
    top: 42px;
    text-align: center;
  }

  .hide-mobile {
    display: none;
  }

  .search-mobile {
    margin-right: 20px;
  }

  @media only screen and (min-width: 768px) {
    svg:nth-child(n + 3) {
      margin-left: 3vw;
    }
    svg:nth-child(1) {
      margin-left: 3vw;
    }

    .hide-desktop {
      display: none;
    }

    .hide-mobile {
      display: block;
    }

    .search {
      top: 90px;

      input {
        margin-right: -6vw;
        width: 50vw;
      }
    }

    span {
      right: 10.3vw;
      top: 50px;
    }
  }
`;

export default ContainerRight;
