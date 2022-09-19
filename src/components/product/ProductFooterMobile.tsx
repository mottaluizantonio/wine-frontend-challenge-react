import { useContext } from 'react';
import Button from '../Button';
import {
  FooterMobile,
  PriceDivMobile,
  PriceOffContainer
} from '../../styles/components/product/ProductFooterMobile';
import formatCurrency from '../../utils/formatCurrency';
import { CartContext } from '../../providers/cart';

const ProductFooterMobile = ({ findProduct }) => {
  const { addToCart } = useContext(CartContext);

  return (
    <FooterMobile>
      <div>
        <PriceOffContainer>{findProduct.discount}% off</PriceOffContainer>
        <PriceDivMobile>
          <div>{formatCurrency(findProduct.price)}</div>
          <div>{formatCurrency(findProduct.priceMember)}</div>
          <div>
            preço não-sócio {formatCurrency(findProduct.priceNonMember)}
          </div>
        </PriceDivMobile>
      </div>
      <div>
        <Button
          type="button"
          onClick={() => addToCart(findProduct, 1)}
          data-cy="add-mobile"
        >
          adicionar
        </Button>
      </div>
    </FooterMobile>
  );
};

export default ProductFooterMobile;
