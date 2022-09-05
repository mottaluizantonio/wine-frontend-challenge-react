import Button from '../../styles/components/Button';
import {
  FooterMobile,
  PriceDivMobile,
  PriceOffContainer
} from '../../styles/components/ProductFooterMobile';
import formatCurrency from '../../utils/formatCurrency';

const ProductFooterMobile = ({ findProduct }) => (
  <FooterMobile>
    <div>
      <PriceOffContainer>{findProduct.discount}% off</PriceOffContainer>
      <PriceDivMobile>
        <div>{formatCurrency(findProduct.price)}</div>
        <div>{formatCurrency(findProduct.priceMember)}</div>
        <div>preço não-sócio {formatCurrency(findProduct.priceNonMember)}</div>
      </PriceDivMobile>
    </div>
    <div>
      <Button>adicionar</Button>
    </div>
  </FooterMobile>
);

export default ProductFooterMobile;
