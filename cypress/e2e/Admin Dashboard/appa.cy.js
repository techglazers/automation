/// <reference types="cypress" />

it('CATEGORIES SEARCH', function(){
    //LOGIN
    cy.visit('http://kidoclo.mrturingdev.com//'); 
    cy.get('#email').type('rabikthapa00@gmail.com');
    cy.get('#password').type('P@ssw0rd5789');
    cy.get('.btn').click();

// click on menu
    cy.get('.nav-item > .bx').click();

    //click on 




    });
