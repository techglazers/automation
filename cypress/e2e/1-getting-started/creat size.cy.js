/// <reference types="cypress" />

it('CATEGORIES SEARCH', function(){
    //LOGIN
    cy.visit('http://kidoclo.mrturingdev.com//'); 
    cy.get('#email').type('rabikthapa00@gmail.com');
    cy.get('#password').type('P@ssw0rd5789');
    cy.get('.btn').click();

// click on menu
    cy.get('.nav-item > .bx').click();

    //click on size
    cy.get(':nth-child(7) > .menu-link').click();
//click on addd new
    cy.get('.col-md-3 > #DataTables_Table_0_length > label > .dt-button').click();
    //enter name
    cy.get('#name').type('Sano');
    //enter symbol
    cy.get('#symbol').type('A');
    //click on submit
    cy.get('.text-center > .btn-primary').click();

   

    });
