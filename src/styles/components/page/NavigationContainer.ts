import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const NavigationButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  color: ${props => props.theme.colors.tannatAnother};
  margin-bottom: 45px;

  > div {
    display: flex;
    justify-content: center;
    align-items: center;

    width: 40px;
    height: 40px;
    border: 1px solid #b6116e;
    border-radius: 3px;
    font-size: 16px;
    margin-right: 7px;

    :hover {
      cursor: pointer;
    }
  }

  p {
    font-size: 12px;
    margin-right: 7px;
  }

  .pointer {
    :hover {
      cursor: pointer;
    }
  }

  .no-pointer {
    :hover {
      cursor: default;
    }
  }

  .current-page {
    color: ${props => props.theme.colors.white};
    background: ${props => props.theme.colors.tannatAnother};
    width: 75px;
  }

  .last {
    margin-right: 0px;
  }
`;
