import Link from 'next/link';
import SearchContainer from '../../styles/components/page/FilterPrice';

const FilterPrice = ({ query }) => {
  const queryName = () => (query.name ? query.name : '');

  return (
    <SearchContainer>
      <h4>Refine sua busca</h4>
      <p>Por preço</p>
      <Link href={`/page/1?price=0-40&name=${queryName()}`}>
        <div className="container">
          <input type="checkbox" checked={query.price === '0-40'} readOnly />
          <span className="checkmark" />
          <span className="checkbox-text">Até R$40</span>
        </div>
      </Link>
      <Link href={`/page/1?price=40-60&name=${queryName()}`}>
        <div className="container">
          <input type="checkbox" checked={query.price === '40-60'} readOnly />
          <span className="checkmark" />
          <span className="checkbox-text">R$40 A R$60</span>
        </div>
      </Link>
      <Link href={`/page/1?price=100-200&name=${queryName()}`}>
        <div className="container">
          <input type="checkbox" checked={query.price === '100-200'} readOnly />
          <span className="checkmark" />
          <span className="checkbox-text">R$100 A R$200</span>
        </div>
      </Link>
      <Link href={`/page/1?price=200-500&name=${queryName()}`}>
        <div className="container">
          <input type="checkbox" checked={query.price === '200-500'} readOnly />
          <span className="checkmark" />
          <span className="checkbox-text">R$200 A R$500</span>
        </div>
      </Link>
      <Link href={`/page/1?price=500-500&name=${queryName()}`}>
        <div className="container">
          <input type="checkbox" checked={query.price === '500-500'} readOnly />
          <span className="checkmark" />
          <span className="checkbox-text">Acima de R$500</span>
        </div>
      </Link>
    </SearchContainer>
  );
};

export default FilterPrice;
