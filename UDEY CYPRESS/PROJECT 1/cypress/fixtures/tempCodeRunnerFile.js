/// <reference types="cypress" />


it('google test', function() {

  cy.visit('https://google.com')
  cy.get('.gLFyf').type('Automation Step by Step{enter}')
  cy.wait(4000)
  cy.contains('Videos').click()
})
