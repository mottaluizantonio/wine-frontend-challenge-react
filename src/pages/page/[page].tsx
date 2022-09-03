import {
  NextPage,
  GetServerSideProps,
  InferGetServerSidePropsType
} from 'next';
import Head from 'next/head';
import Link from 'next/link';

import Header from '../../components/Header';
import { Data } from '../../interfaces/products';
import { Button } from '../../styles/components/Button';
import {
  Container,
  Content,
  PriceOff,
  PricePartner,
  ProductBox,
  ProductsGrid
} from '../../styles/pages/Page';
import formatCurrency from '../../utils/formatCurrency';

export const getServerSideProps: GetServerSideProps = async ({
  params,
  query
}) => {
  const res = await fetch(
    `https://wine-back-test.herokuapp.com/products?page=${params.page}&limit=9&filter=${query.price}`
  );
  const data: Data = await res.json();

  return {
    props: {
      data
    }
  };
};

const Page: NextPage = ({
  data
}: InferGetServerSidePropsType<typeof getServerSideProps>) => (
  <div>
    <Head>
      <title>Wine | Compre vinhos online com descontos exclusivos!</title>
      <meta name="description" content="Generated by create next app" />
      {/* <link rel="icon" href="/favicon.ico" /> */}
    </Head>

    <Header />
    <main>
      <Container>
        <Content>
          <p>
            <span>{data.totalItems}</span> produtos encontrados
          </p>
          <ProductsGrid>
            {data.items.map(product => (
              <div>
                <Link href={`/product/${product.id}`}>
                  <ProductBox key={product.id}>
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
                    <p>não sócio {formatCurrency(product.priceNonMember)}</p>
                  </ProductBox>
                </Link>
                <Button
                  width="256px"
                  marginBottom="30px"
                  fontSize="14px"
                  uppercase
                >
                  adicionar
                </Button>
              </div>
            ))}
          </ProductsGrid>
        </Content>
      </Container>
    </main>
  </div>
);

export default Page;
