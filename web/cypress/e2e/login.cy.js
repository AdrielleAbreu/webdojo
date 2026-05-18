
describe ('Login', () => {

  it('Login com Sucesso', () => {
    cy.start()
    cy.submitLoginForm('papito@webdojo.com', 'katana123')

    cy.get('[data-cy="user-name"]')
      .should('be.visible')
      .and('have.text','Fernando Papito')

    cy.get('[data-cy="welcome-message"]')
      .should('be.visible')
      .and('have.text','Olá QA, esse é o seu Dojo para aprender Automação de Testes.')

  })

  it('Login com senha Invalida', () => {
    cy.start()
    cy.submitLoginForm('papito@webdojo.com', 'katan321')

    cy.contains('Acesso negado! Tente novamente.')
      .should('be.visible')
      
  })

  it('Login com email Invalido', () => {
    cy.start()
    cy.submitLoginForm('404@webdojo.com', 'katana123')

    cy.contains('Acesso negado! Tente novamente.')
      .should('be.visible')
      
  })

})