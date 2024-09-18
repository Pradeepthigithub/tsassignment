Cypress.on('uncaught:exception', (err, runnable) => { return false; })

describe('example to-do app', () => {
    cy.visit('https://lastcallmedia.com/contact')

  it('should not allow form submission without solving the CAPTCHA', () => {
    cy.get('#edit-field-name-0-value').type('Pradeepthi Kavuri');
    cy.get('#edit-mail').type('k.pradeepthi17@gmail.com');  
    cy.get('#edit-message-0-value').type('test message here');
    cy.get('#edit-submit').click();
    cy.scrollTo('top');
    cy.get("div[role='alert']").should('exist').and('be.visible')
  .and('contain.text', 'The answer you entered for the CAPTCHA was not correct.');
  })
})