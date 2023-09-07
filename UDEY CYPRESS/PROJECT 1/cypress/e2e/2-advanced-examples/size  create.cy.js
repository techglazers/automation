/// <reference types="cypress" />

it('CATEGORIES SEARCH', function(){
    //LOGIN
    cy.visit('https://kidoclo.mrturingdev.com/');
    cy.get('#email').type('rabikthapa00@gmail.com');
    cy.get('#password').type('P@ssw0rd5789');
    cy.get('.btn').click();

// click on meu
    cy.get('.nav-item > .bx').click();

    //click on size
    cy.get(':nth-child(7) > .menu-link').click();

    cy.get('.col-md-3 > #DataTables_Table_0_length > label > .dt-button').click();

    });

    