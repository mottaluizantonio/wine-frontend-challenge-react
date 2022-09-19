import Link from 'next/link';

import Account from '../../assets/account.svg';
import Winebox from '../../assets/wineBoxCart.svg';

const AccountWineboxLogos = () => (
  <>
    <div className="hide-mobile">
      <Account />
    </div>
    <Link href="/cart">
      <div className="winebox">
        <Winebox />
      </div>
    </Link>
  </>
);

export default AccountWineboxLogos;
