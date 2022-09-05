import Container from '../../styles/components/Header';
import HeaderContainerLeft from './HeaderContainerLeft';
import HeaderContainerRight from './HeaderContainerRight';

const Header = () => (
  <Container>
    <HeaderContainerLeft />
    <HeaderContainerRight />
  </Container>
);

export default Header;
