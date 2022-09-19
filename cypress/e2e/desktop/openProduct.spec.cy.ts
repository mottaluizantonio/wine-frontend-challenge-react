describe('Add 2 product', () => {
  it('should open a product detail', () => {
    cy.visit('http://localhost:3000/page/1');
    cy.viewport(1440, 900);

    cy.contains('Garrida').click();
  });

  it('should add 2 products to the cart', () => {
    cy.viewport(1440, 900);

    cy.contains('+').click();
    cy.contains('Adicionar').click();
  });

  it('should go back to the main page', () => {
    cy.viewport(1440, 900);

    cy.contains('Voltar').click();
  });
});

describe('search by name and price filter', () => {
  it('make a search by name', () => {
    cy.viewport(1440, 900);

    cy.get('.menu-button').click();
    cy.get('input[type=text]').type('2017');
    cy.get('.button-search').click();
  });

  it('should select a filter and add one', () => {
    cy.viewport(1440, 900);

    cy.contains('R$200 A R$500').click();
    cy.contains('adicionar').click();
  });
});

describe('go to cart, interact and go back to store page', () => {
  it('should go to the cart', () => {
    cy.viewport(1440, 900);

    cy.get('.winebox').click();
  });

  it('should remove and add more items', () => {
    cy.viewport(1440, 900);

    cy.contains('-').click();
    cy.contains('-').click();
    cy.contains('+').click();
    cy.contains('+').click();
    cy.get('.button-x').click();
  });

  it('should go back to the store page', () => {
    cy.viewport(1440, 900);

    cy.contains('Loja').click();
  });
});
