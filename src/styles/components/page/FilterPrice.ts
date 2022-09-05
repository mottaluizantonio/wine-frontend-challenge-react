import styled from 'styled-components';

const SearchContainer = styled.div`
  min-width: 136px;
  display: none;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;

  margin-right: 100px;

  div,
  input {
    :hover {
      cursor: pointer;
    }
  }

  h4 {
    color: ${props => props.theme.colors.black};
    font: 700 20px Neo Sans Std, sans-serif;
    margin-bottom: 30px;
  }

  p {
    color: ${props => props.theme.colors.blackLight};
    font-size: 18px;
    font-weight: 700;
    margin-bottom: 30px;
  }

  .container {
    display: block;
    position: relative;
    padding-left: 35px;
    margin-bottom: 26px;
    cursor: pointer;
    color: ${props => props.theme.colors.grayCard};
    font-size: 14px;
    font-weight: 400;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }

  .container input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
  }

  .checkmark {
    position: absolute;
    top: 0;
    left: 0;
    height: 16px;
    width: 16px;
    border-radius: 50%;
    border: 2px solid #8888;
    background: ${props => props.theme.colors.background};
  }

  .container:hover input ~ .checkmark {
    background: ${props => props.theme.colors.graySilver};
  }

  .container input:checked ~ .checkmark {
    background: ${props => props.theme.colors.tannatDefault};
  }

  .checkmark:after {
    content: '';
    position: absolute;
    display: none;
  }

  .container input:checked ~ .checkmark:after {
    display: block;
  }

  @media only screen and (min-width: 940px) {
    display: flex;
  }
`;

export default SearchContainer;
