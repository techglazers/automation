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
      cy.get('.mb-2').should('be.visible');
    });
  });


  //BRAND
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

 //delete top brand in search
 Cypress.Commands.add('deletebrand', (keyword, status) => {

  cy.get('.delete-record > .bx').eq(0).click();
  cy.get('.btn-danger').click();
  cy.get('.alert-heading').should('contain', 'Success!');
 })

 
  //SIZE
  //go to size
  Cypress.Commands.add('gotosize', () => {

    cy.get('.nav-item > .bx').click();
    cy.get(':nth-child(7) > .menu-link').click();
    cy.get('.fw-bold').should('be.visible');
   })

   //create a new size

Cypress.Commands.add('createsize', (name, symbol, status) => {

  cy.get('.col-md-3 > #DataTables_Table_0_length > label > .dt-button').click({force: true});
  cy.get('#name').type(name);
  cy.get('#symbol').type(symbol);
  cy.get('#status').select(status);
  cy.get('.text-center > .btn-primary').click();
  cy.get('.alert-heading').should('contain', 'Success!');

 })

 //filter size
 Cypress.Commands.add('filtersize', (keyword) => {

  cy.get('#DataTables_Table_0_length > :nth-child(1) > .form-control').type(keyword);
  cy.get(':nth-child(2) > .dt-button').click();
 })

 //edit size
 Cypress.Commands.add('editsize', (name, symbol, status) => {

  cy.get('.text-nowrap > .me-2').click();
  cy.get('#name').clear().type(name);
  cy.get('#symbol').clear().type(symbol);
  cy.get('#status').select(status);
  cy.get('.text-center > .btn-primary').click();
  cy.get('.alert-heading').should('contain', 'Success!');
 })

//delete size
Cypress.Commands.add('deletesize', (keyword, status) => {

  cy.get('.delete-record > .bx').click();
  cy.get('.btn-danger').click();
  cy.get('.alert-heading').should('contain', 'Success!');
 })



 