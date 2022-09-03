import Link from 'next/link';

import Search from '../assets/search.svg';
import Search2 from '../assets/search2.svg';
import Account from '../assets/account.svg';
import Winebox from '../assets/wineBox.svg';
import Winelogo from '../assets/wineLogo.svg';
import HambMenu from '../assets/hambMenu.svg';
import {
  Container,
  ContainerLeft,
  ContainerRight
} from '../styles/components/Header';

const Header = () => (
  <Container>
    <ContainerLeft>
      <HambMenu />
      <Link href="/page/1">
        <Winelogo />
      </Link>
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
      <Search2 />
      <Winebox />
    </ContainerRight>
  </Container>
);

export default Header;
