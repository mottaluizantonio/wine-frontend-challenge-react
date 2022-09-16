import ButtonContainer from '../styles/components/ButtonContainer';

const Button = ({ children, ...rest }) => (
  <ButtonContainer data-testid="button-add-product" {...rest}>
    {children}
  </ButtonContainer>
);

export default Button;
