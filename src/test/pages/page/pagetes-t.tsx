import React from 'react';
import { render } from '@testing-library/react';
import { Data } from '../../../interfaces/products';
import ProductGrid from '../../../components/page/ProductGrid';

describe('the main page', () => {
  it.only('should renders initial list of products from the API correctly');

  const testData: Data = {
    page: 1,
    totalPages: 1,
    itemsPerPage: 1,
    totalItems: 1,
    items: [
      {
        id: 2,
        image:
          'https://www.wine.com.br/cdn-cgi/image/f=png,h=515,q=99/assets-images/produtos/24168-01.png',
        name: 'Viña Bouchon País Salvaje 2019',
        price: 241.9,
        discount: 31,
        priceMember: 166.55,
        priceNonMember: 195.94,
        type: 'Tinto',
        classification: 'Seco',
        size: '750 ml',
        rating: 4,
        avaliations: 4,
        country: 'Chile',
        region: 'Valle del Maule',
        flag: 'https://img.wine.com.br/fenix/image/flags/rounded/chile.svg',
        sommelierComment:
          'Pontuado com 92 Tim Atkin, este tinto traz a uva País, proveniente de vinhas selvagens que crescem naturalmente no Valle del Maule. A colheita dessas uvas é feita manualmente, com o auxílio de escadas de até 5 metros de altura. Para expressar fielmente suas características, esse vinho não é filtrado, preservando os aromas e sabores desta raridade'
      }
    ]
  };
  const { getByTestId, debug } = render(<ProductGrid data={testData} />);

  debug();
});
