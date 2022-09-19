import Link from 'next/link';

import Winelogo from '../../assets/wineLogo.svg';
import HambMenu from '../../assets/hambMenu.svg';
import ContainerLeft from '../../styles/components/header/HeaderContainerLeft';

const HeaderContainerLeft = () => (
  <ContainerLeft>
    <HambMenu />
    <Link href="/page/1">
      <div>
        <Winelogo data-cy="winelogo" />
      </div>
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
);

export default HeaderContainerLeft;
