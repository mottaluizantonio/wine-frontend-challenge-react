import {
  NextPage,
  GetServerSideProps,
  InferGetServerSidePropsType
} from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { useContext } from 'react';

import BlackWine from '../../assets/blackWine.svg';

import Header from '../../components/Header';
import { Data } from '../../interfaces/products';
import { CartContext } from '../../providers/cart';
import Button from '../../styles/components/Button';
import {
  Container,
  Content,
  LineDiv,
  MainContent,
  NavigationButtonsContainer,
  NavigationContainer,
  PriceOff,
  PricePartner,
  ProductBox,
  ProductsGrid,
  SealContainer,
  SearchContainer
} from '../../styles/pages/Page';
import formatCurrency from '../../utils/formatCurrency';

export const getServerSideProps: GetServerSideProps = async ({
  params,
  query
}) => {
  const res = await fetch(
    `https://wine-back-test.herokuapp.com/products?page=${
      params.page
    }&limit=9&filter=${query.price}&name=${query.name ? query.name : ''}`
  );
  const data: Data = await res.json();

  return {
    props: {
      data,
      query
    }
  };
};

const Page: NextPage = ({
  data,
  query
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const { addToCart } = useContext(CartContext);

  return (
    <div>
      <Head>
        <title>Wine | Compre vinhos online com descontos exclusivos!</title>
        <meta name="description" content="Generated by create next app" />
      </Head>

      <Header />
      <main>
        <Container>
          <Content>
            <SearchContainer>
              <h4>Refine sua busca</h4>
              <p>Por preço</p>
              <Link href={`/page/1?price=0-40&name=${query.name}`}>
                <div className="container">
                  <input
                    type="checkbox"
                    checked={query.price === '0-40'}
                    readOnly
                  />
                  <span className="checkmark" />
                  <span className="checkbox-text">Até R$40</span>
                </div>
              </Link>
              <Link href={`/page/1?price=40-60&name=${query.name}`}>
                <div className="container">
                  <input
                    type="checkbox"
                    checked={query.price === '40-60'}
                    readOnly
                  />
                  <span className="checkmark" />
                  <span className="checkbox-text">R$40 A R$60</span>
                </div>
              </Link>
              <Link href={`/page/1?price=100-200&name=${query.name}`}>
                <div className="container">
                  <input
                    type="checkbox"
                    checked={query.price === '100-200'}
                    readOnly
                  />
                  <span className="checkmark" />
                  <span className="checkbox-text">R$100 A R$200</span>
                </div>
              </Link>
              <Link href={`/page/1?price=200-500&name=${query.name}`}>
                <div className="container">
                  <input
                    type="checkbox"
                    checked={query.price === '200-500'}
                    readOnly
                  />
                  <span className="checkmark" />
                  <span className="checkbox-text">R$200 A R$500</span>
                </div>
              </Link>
              <Link href={`/page/1?price=500-500&name=${query.name}`}>
                <div className="container">
                  <input
                    type="checkbox"
                    checked={query.price === '500-500'}
                    readOnly
                  />
                  <span className="checkmark" />
                  <span className="checkbox-text">Acima de R$500</span>
                </div>
              </Link>
            </SearchContainer>
            <MainContent>
              <div className="top-search">
                {query.name && (
                  <p>
                    Buscando &quot;<span>{query.name}</span>&quot;
                  </p>
                )}
                <span>{data.totalItems}</span> produtos encontrados
              </div>
              <LineDiv />
              <ProductsGrid>
                {data.items.map(product => (
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
                            <span>
                              {product.priceMember.toString().split('.')[0]}
                            </span>
                            ,
                            {
                              product.priceMember
                                .toFixed(2)
                                .toString()
                                .split('.')[1]
                            }
                          </p>
                        </PricePartner>
                        <p>
                          não sócio {formatCurrency(product.priceNonMember)}
                        </p>
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
              </ProductsGrid>
              <NavigationContainer>
                <NavigationButtonsContainer>
                  {data.page - 1 > 0 && (
                    <>
                      <Link
                        href={`/page/${data.page - 1}${
                          query.price
                            ? `?price=${query.price}?name=${query.name}`
                            : `?name=${query.name}`
                        }`}
                      >
                        <p className="pointer">&lt;&lt; Anterior</p>
                      </Link>
                      {data.page > 2 && <p>...</p>}
                      <Link
                        href={`/page/${data.page - 1}${
                          query.price
                            ? `?price=${query.price}?name=${query.name}`
                            : `?name=${query.name}`
                        }`}
                      >
                        <div>{data.page - 1}</div>
                      </Link>
                    </>
                  )}
                  <div className="current-page no-pointer">{data.page}</div>
                  {data.page + 1 <= data.totalPages && (
                    <>
                      <Link
                        href={`/page/${data.page + 1}${
                          query.price
                            ? `?price=${query.price}?name=${query.name}`
                            : `?name=${query.name}`
                        }`}
                      >
                        <div>{data.page + 1}</div>
                      </Link>
                      {data.page + 1 < data.totalPages && <p>...</p>}
                      <Link
                        href={`/page/${data.page + 1}${
                          query.price
                            ? `?price=${query.price}?name=${query.name}`
                            : `?name=${query.name}`
                        }`}
                      >
                        <p className="pointer last">Próximo &gt;&gt;</p>
                      </Link>
                    </>
                  )}
                </NavigationButtonsContainer>
              </NavigationContainer>
            </MainContent>
          </Content>
        </Container>
      </main>
    </div>
  );
};
export default Page;
