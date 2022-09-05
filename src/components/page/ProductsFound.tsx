import {
  EmptyProducts,
  LineDiv,
  ProductsFoundContainer
} from '../../styles/components/ProductsFound';

const ProductsFound = ({ data, query }) => (
  <ProductsFoundContainer>
    {data.totalItems === 0 && (
      <EmptyProducts>
        <span>=(</span>
        <p>Desculpe, não encontramos nenhum produto</p>
      </EmptyProducts>
    )}

    {data.totalItems > 0 && (
      <>
        <div className="top-search">
          {query.name && (
            <p>
              Buscando &quot;<span>{query.name}</span>&quot;
            </p>
          )}
          <span>{data.totalItems}</span> produtos encontrados
        </div>
        <LineDiv />
      </>
    )}
  </ProductsFoundContainer>
);

export default ProductsFound;
