import { useContext } from 'react';
import { CartContext } from '../../providers/cart';

import { ItemCart } from '../../interfaces/products';
import { PricePartner } from '../../styles/components/ProductBoxCart';

const PricePartnerCart = ({ productID }) => {
  const { cart } = useContext(CartContext);

  const product = cart.find(item => item.id === productID);

  const priceSplit = (item: ItemCart, value: number) =>
    (item.priceNonMember * item.quantity).toFixed(2).toString().split('.')[
      value
    ];

  return (
    <PricePartner>
      <p>
        R$
        <span>{priceSplit(product, 0)}</span>,{priceSplit(product, 1)}
      </p>
    </PricePartner>
  );
};

export default PricePartnerCart;
