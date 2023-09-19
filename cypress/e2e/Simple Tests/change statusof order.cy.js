/// <reference types="cypress" />
// change status Of order
it('CATEGORIES SEARCH', function(){
    //LOGIN
    cy.visit('http://kidoclo.mrturingdev.com//'); 
    cy.get('#email').type('rabikthapa00@gmail.com');
    cy.get('#password').type('P@ssw0rd5789');
    
    //password view button
    cy.get('.bx').click();
    
    //screenshot
    cy.screenshot(' Before Login Test');

    //click on login button
    cy.get('.btn').click();

       //screenshot
       cy.screenshot(' After Login Test');
    

// click on menu
    cy.get('.nav-item > .bx').click();

    //click on Orders
    cy.get(':nth-child(10) > .menu-link').click();

    //click on top Order
    cy.get(':nth-child(1) > :nth-child(1) > .text-truncate > a').click({ force: true});

       //screenshot
       cy.screenshot(' See Status at beginning');

    //change status
    cy.get('#status').select('Shipped', { force: true});

    //click on confirm
    cy.get('#confirm').click({ force: true});

    //click on Ok
    cy.get('.swal2-confirm').click();

       //screenshot
       cy.screenshot(' See Changed Status');
    

   

    });
