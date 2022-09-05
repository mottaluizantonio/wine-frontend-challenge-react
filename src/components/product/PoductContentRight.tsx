import { useContext, useState } from 'react';
import { CartContext } from '../../providers/cart';

import ArrowRegion from '../../assets/arrowRegion.svg';
import StarEmpty from '../../assets/starEmpty.svg';
import StarFull from '../../assets/starFull.svg';
import RoundEmpty from '../../assets/roundEmpty.svg';

import {
  ButtonContainer,
  ContentRight,
  DescriptionContainer,
  InfoContainer,
  PricesContainer,
  ProductHeader,
  RegionContainer
} from '../../styles/components/PoductContentRight';
import formatCurrency from '../../utils/formatCurrency';

const PoductContentRight = ({ findProduct }) => {
  const { addToCart } = useContext(CartContext);
  const [addQuantity, setAddQuantity] = useState<number>(1);

  const priceSplit = (value: number) =>
    findProduct.priceMember.toFixed(2).toString().split('.')[value];

  return (
    <ContentRight>
      <ProductHeader>
        <RegionContainer>
          <span>Vinhos</span>
          <ArrowRegion />
          <span>{findProduct.country}</span>
          <ArrowRegion />
          <span>{findProduct.region}</span>
        </RegionContainer>
        <h1>{findProduct.name}</h1>
        <InfoContainer>
          <img src={findProduct.flag} alt={findProduct.country} />
          <p>{findProduct.country}</p>
          <p>{findProduct.type}</p>
          <p>{findProduct.classification}</p>
          <p>{findProduct.size}</p>
          {findProduct.rating > 0 ? <StarFull /> : <StarEmpty />}
          {findProduct.rating > 1 ? <StarFull /> : <StarEmpty />}
          {findProduct.rating > 2 ? <StarFull /> : <StarEmpty />}
          {findProduct.rating > 3 ? <StarFull /> : <StarEmpty />}
          {findProduct.rating > 4 ? <StarFull /> : <StarEmpty />}
          <p>({findProduct.avaliations})</p>
        </InfoContainer>
      </ProductHeader>
      <img src={findProduct.image} alt={findProduct.name} />
      <PricesContainer>
        <p>
          R$&nbsp;
          <span className="price-big">{priceSplit(0)}</span>
          <span className="price-medium">,{priceSplit(1)}</span>
        </p>
        <span>NÃO SÓCIO {formatCurrency(findProduct.priceNonMember)}/UN.</span>
      </PricesContainer>
      <DescriptionContainer>
        <h3>Descrição</h3>
        <h3>Comentário do Sommelier</h3>
        <p>{findProduct.sommelierComment}</p>
      </DescriptionContainer>
      <ButtonContainer>
        <div>
          <RoundEmpty />
          <button
            type="button"
            className="quantity-button"
            onClick={() => addQuantity > 1 && setAddQuantity(addQuantity - 1)}
          >
            -
          </button>
          {addQuantity}
          <button
            type="button"
            className="quantity-button"
            onClick={() => setAddQuantity(addQuantity + 1)}
          >
            +
          </button>
          <RoundEmpty />
        </div>
        <button
          type="button"
          onClick={() => addToCart(findProduct, addQuantity)}
        >
          Adicionar
        </button>
      </ButtonContainer>
    </ContentRight>
  );
};

export default PoductContentRight;
