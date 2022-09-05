import Link from 'next/link';
import { useContext } from 'react';

import {
  ProductBox,
  PriceOff,
  PricePartner,
  SealContainer,
  Container
} from '../../styles/components/ProductGrid';
import formatCurrency from '../../utils/formatCurrency';
import BlackWine from '../../assets/blackWine.svg';
import Button from '../../styles/components/Button';
import { CartContext } from '../../providers/cart';
import { Item } from '../../interfaces/products';

const ProductGrid = ({ data }) => {
  const { addToCart } = useContext(CartContext);

  return (
    <Container>
      {data.items.map((product: Item) => (
        <div key={product.id}>
          <Link href={`/product/${product.id}`}>
            <ProductBox>
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
            </ProductBox>
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
      ))}
    </Container>
  );
};

export default ProductGrid;
