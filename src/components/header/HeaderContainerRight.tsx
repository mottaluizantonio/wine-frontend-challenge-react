import ContainerRight from '../../styles/components/header/HeaderContainerRight';
import SearchContainer from './SearchContainer';
import HeaderCartCounter from './HeaderCartCounter';
import AccountWineboxLogos from './AccountWineboxLogos';

const HeaderContainerRight = () => (
  <ContainerRight>
    <HeaderCartCounter />
    <SearchContainer />
    <AccountWineboxLogos />
  </ContainerRight>
);

export default HeaderContainerRight;
