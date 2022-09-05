import { useRef, useState } from 'react';
import Link from 'next/link';

import Search from '../assets/search.svg';
import Search2 from '../assets/search2.svg';

const SearchContainer = () => {
  const dropDownRef = useRef(null);
  const [isActive, setIsActive] = useState(false);
  const [inputText, setInputText] = useState('');

  const handleClickSearch = () => setIsActive(!isActive);

  const inputHandler = e => {
    setInputText(e.target.value);
  };

  return (
    <div className="search-container">
      <button type="button" onClick={handleClickSearch} className="menu-button">
        <div className="hide-mobile">
          <Search />
        </div>
        <div className="hide-desktop search-mobile">
          <Search2 />
        </div>
      </button>
      <div
        ref={dropDownRef}
        className={`search ${isActive ? 'active' : 'inactive'}`}
      >
        <form>
          <input type="text" placeholder="Pesquisar" onChange={inputHandler} />
          <Link href={`/page/1?name=${inputText}`}>
            <div className="button-search">
              <Search2 />
            </div>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default SearchContainer;
