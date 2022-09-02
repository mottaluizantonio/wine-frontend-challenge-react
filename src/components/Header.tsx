import Search from '../assets/search.svg';
import Account from '../assets/account.svg';
import Winebox from '../assets/wineBox.svg';
import Winelogo from '../assets/wineLogo.svg';
import {
  Container,
  ContainerLeft,
  ContainerRight
} from '../styles/components/Header';

const Header = () => (
  <Container>
    <ContainerLeft>
      <Winelogo />
      <ul>
        <li>Clube</li>
        <li>Loja</li>
        <li>Produtores</li>
        <li>Ofertas</li>
        <li>Eventos</li>
      </ul>
    </ContainerLeft>
    <ContainerRight>
      <Search />
      <Account />
      <Winebox />
    </ContainerRight>
  </Container>
);

export default Header;