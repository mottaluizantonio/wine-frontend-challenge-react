import ButtonContainer from '../styles/components/ButtonContainer';

const Button = ({ children, ...rest }) => (
  <ButtonContainer {...rest}>{children}</ButtonContainer>
);

export default Button;
