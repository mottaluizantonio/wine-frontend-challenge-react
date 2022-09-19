describe('Add 2 product', () => {
  it('should open a product detail', () => {
    cy.visit('http://localhost:3000/page/1');
    cy.viewport(375, 900);

    cy.contains('Garrida').click();
  });

  it('should add the product to the cart', () => {
    cy.viewport(375, 900);

    cy.get('[data-cy="add-mobile"]').click();
  });

  it('should go back to the store page', () => {
    cy.viewport(375, 900);
    cy.get('[data-cy="winelogo"]').click();
  });
});

describe('search by name', () => {
  it('make a search by name', () => {
    cy.viewport(375, 900);

    cy.get('.menu-button').click();
    cy.get('input[type=text]').type('2017');
    cy.get('.menu-button').click();
  });

  it('should add one', () => {
    cy.viewport(375, 900);

    cy.contains('adicionar').click();
  });
});

describe('go to cart, interact and go back to store page', () => {
  it('should go to the cart', () => {
    cy.viewport(375, 900);

    cy.get('.winebox').click();
  });

  it('should remove item', () => {
    cy.viewport(375, 900);

    cy.get('.button-x').click();
  });

  it('should go back to the store page', () => {
    cy.viewport(375, 900);

    cy.get('[data-cy="winelogo"]').click();
  });
});
