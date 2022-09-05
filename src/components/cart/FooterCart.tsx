import { useContext } from 'react';
import { CartContext } from '../../providers/cart';
import Button from '../../styles/components/Button';
import ContainerFooterCart from '../../styles/components/cart/FooterCart';

const FooterCart = () => {
  const { cart } = useContext(CartContext);

  const cartTotal = cart
    .reduce(
      (total, { priceNonMember, quantity }) =>
        total + priceNonMember * quantity,
      0
    )
    .toFixed(2);
  const memberEco = (
    cart.reduce(
      (total, { priceNonMember, quantity }) =>
        total + priceNonMember * quantity,
      0
    ) -
    cart.reduce(
      (total, { priceMember, quantity }) => total + priceMember * quantity,
      0
    )
  ).toFixed(2);

  return (
    <ContainerFooterCart>
      <div>
        <div>
          <p>Total:</p>
          <p>R$ {cartTotal}</p>
        </div>
        <p>Torne-se membro e economize R$ {memberEco}</p>
        <Button width="300px" height="45px">
          finalizar pedido
        </Button>
      </div>
    </ContainerFooterCart>
  );
};

export default FooterCart;
