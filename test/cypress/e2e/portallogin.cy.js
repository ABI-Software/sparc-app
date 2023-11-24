describe('Login page', () => {
  before(function () {
    cy.visit('')
  })

  it('Login', () => {
    cy.get('.header__nav--parent > .sign-in-link').should('contain', 'Sign in').click()
    cy.get('.main-content-container').should('be.visible')
    cy.get('.heading1').should('have.text', '\n      Sign into SPARC\n    ')
    cy.get('.content > .secondary > span').should('contain', 'Sign in with ORCID iD')
    cy.get('.close-button-container > .el-button > span').click()
  })
})