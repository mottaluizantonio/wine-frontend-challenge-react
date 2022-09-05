import Link from 'next/link';

import {
  Container,
  NavigationButtonsContainer
} from '../styles/components/NavigationContainer';

const NavigationContainer = ({ data, query }) => {
  const queryName = () => (query.name ? query.name : '');

  const pageChange = up => {
    if (up) {
      return `/page/${data.page + 1}${
        query.price
          ? `?price=${query.price}?name=${queryName()}`
          : `?name=${queryName()}`
      }`;
    }

    return `/page/${data.page - 1}${
      query.price
        ? `?price=${query.price}?name=${queryName()}`
        : `?name=${queryName()}`
    }`;
  };

  return (
    <Container>
      <NavigationButtonsContainer>
        {data.page - 1 > 0 && (
          <>
            <Link href={pageChange(false)}>
              <p className="pointer">&lt;&lt; Anterior</p>
            </Link>
            {data.page > 2 && <p>...</p>}
            <Link href={pageChange(false)}>
              <div>{data.page - 1}</div>
            </Link>
          </>
        )}
        {data.totalItems > 0 && (
          <div className="current-page no-pointer">{data.page}</div>
        )}

        {data.page + 1 <= data.totalPages && (
          <>
            <Link href={pageChange(true)}>
              <div>{data.page + 1}</div>
            </Link>
            {data.page + 1 < data.totalPages && <p>...</p>}
            <Link href={pageChange(true)}>
              <p className="pointer last">Próximo &gt;&gt;</p>
            </Link>
          </>
        )}
      </NavigationButtonsContainer>
    </Container>
  );
};

export default NavigationContainer;
