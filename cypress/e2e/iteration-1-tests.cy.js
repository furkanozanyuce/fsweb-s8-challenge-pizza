describe('Sayfa Açılıyor mu?', () => {
    
    it("First page", () => {
        cy.visit('http://localhost:5173/');
    });
});

describe("Orderpage sayfasına gidiyor mu?" , () => {
    it('Button a basınca sipariş sayfasına gidiyor mu?', () => {
        cy.visit('http://localhost:5173/');

        cy.get('[data-cy="button"]').should('not.be.disabled').click();
        cy.url().should('include', '/orderpage');
      });
})

describe('OrderPage sayfası hataları', () => {
    
    it('Başarılı seçim yapınca success sayfasına gidiyor', () => {
        cy.visit('http://localhost:5173/orderpage');

        cy.get('[type="radio"]').check('kucuk');
        cy.get('select').select('İnce');
        cy.get('form input').check(['pepperoni', 'sosis', "kanadaJambonu", "tavukIzgara"]);
        cy.get('textarea').type('Zile basmayın lütfen.');

        cy.get('.order-button').should('not.be.disabled').click();
        cy.url().should('include', '/successpage');
      });

    it('Yanlış seçim yapınca hata mesajları göüzüküyor ve button disabled oluyor', () => {
        cy.visit('http://localhost:5173/orderpage');

        cy.get('[type="radio"]').check('kucuk');
        cy.get('select').select('İnce');
        cy.get('form input').check(['pepperoni', 'sosis']);
        cy.get('textarea').type('Zil');

        cy.get('[data-cy="note-error"]').should('have.length', 1);
        cy.get('[data-cy="check-error"]').should('have.length', 1);

        cy.contains('Sipariş notu en az 5 harften oluşabilir!').should('be.visible');
        cy.contains('En az 4, en fazla 10 adet ekstra malzeme seçebilirsiniz!').should('be.visible');

        cy.get('.order-button').should('be.disabled');
      });
    
});

