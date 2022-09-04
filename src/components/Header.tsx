import Link from 'next/link';
import { useContext } from 'react';
import { CartContext } from '../providers/cart';

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

const Header = () => {
  const { cart } = useContext(CartContext);

  return (
    <Container>
      <ContainerLeft>
        <HambMenu />
        <Link href="/page/1">
          <Winelogo />
        </Link>
        <ul>
          <li>Clube</li>
          <Link href="/page/1">
            <li>Loja</li>
          </Link>
          <li>Produtores</li>
          <li>Ofertas</li>
          <li>Eventos</li>
        </ul>
      </ContainerLeft>
      <ContainerRight>
        <span>
          {cart.length > 0
            ? cart.reduce((acc, { quantity }) => acc + quantity, 0)
            : '0'}
        </span>
        <Search />
        <Account />
        <Search2 />
        <Link href="/cart">
          <Winebox />
        </Link>
      </ContainerRight>
    </Container>
  );
};

export default Header;
