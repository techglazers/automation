// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })


// commands.js

//Login
Cypress.Commands.add('login', () => {
    cy.fixture('credentials.json').then((credentials) => {
      cy.visit('http://kidoclo.mrturingdev.com/');
      cy.get('#email').type(credentials.email);
      cy.get('#password').type(credentials.password);
      cy.get('.btn').click();
    });
  });

  //goto brand
 Cypress.Commands.add('gotobrand', () => {

  cy.get('.nav-item > .bx').click();
  cy.get(':nth-child(5) > .menu-link').click();
 })

 //create a new brand
 Cypress.Commands.add('createbrand', (name, status) => {

  cy.get('.col-md-3 > #DataTables_Table_0_length > label > .dt-button').click({force: true});
  cy.get('#name').type(name);
  cy.get('#status').select(status);
  cy.pause();
  cy.get('.btn-primary').click();
  cy.get('.alert').should('be.visible');
 })

 //filter brand
 Cypress.Commands.add('filterbrand', (keyword, status) => {

  cy.get('.form-control').type(keyword, {force: true});
  cy.get('#search_status').select(status, {force: true});
  cy.get(':nth-child(3) > .dt-button').click({force: true});
 })

 //delete brand
 Cypress.Commands.add('deletebrand', (keyword, status) => {

  cy.get('.delete-record > .bx').click();
  cy.get('.btn-danger').click();
  cy.get('.alert').should('be.visible');
 })

 



 