import Link from 'next/link';
import { useContext } from 'react';

import {
  Container,
  PriceOff,
  PricePartner,
  SealContainer
} from '../styles/components/ProductBox';
import formatCurrency from '../utils/formatCurrency';
import BlackWine from '../assets/blackWine.svg';
import Button from '../styles/components/Button';
import { CartContext } from '../providers/cart';

const ProductBox = ({ product }) => {
  const { addToCart } = useContext(CartContext);

  return (
    <div>
      <Link href={`/product/${product.id}`}>
        <Container>
          <SealContainer>
            <BlackWine />
          </SealContainer>
          <img src={product.image} alt={product.name} />
          <h2>{product.name}</h2>
          <PriceOff>
            <p>R$ {product.price.toFixed(2)}</p>
            <span> {product.discount}% off</span>
          </PriceOff>
          <PricePartner>
            <p>sócio wine</p>
            <p>
              R$
              <span>{product.priceMember.toString().split('.')[0]}</span>,
              {product.priceMember.toFixed(2).toString().split('.')[1]}
            </p>
          </PricePartner>
          <p>não sócio {formatCurrency(product.priceNonMember)}</p>
        </Container>
      </Link>
      <Button
        className="button button-desktop"
        width="256px"
        marginBottom="30px"
        fontSize="14px"
        uppercase
        onClick={() => addToCart(product, 1)}
      >
        adicionar
      </Button>
      <Button
        className="button button-mobile"
        width="156px"
        height="40px"
        marginBottom="24px"
        fontSize="14px"
        onClick={() => addToCart(product, 1)}
      >
        adicionar
      </Button>
    </div>
  );
};

export default ProductBox;
