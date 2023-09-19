/// <reference types="cypress" />
//login to kido o clo vercel app
it('CATEGORIES SEARCH', function(){
    //LOGIN
    cy.visit('https://kidooclo.vercel.app/'); 
    cy.get('.gap-2 > :nth-child(2) > .text-gray-icon').click();
    cy.get('.relative > .btn-gradient-primary').click();
    cy.get('#email').type('testrabik@gmail.com');
    cy.get('#password').type('testrabik1234');
    //view password
    cy.get('form > :nth-child(2) > .input-group > .absolute').click();
 //screenshot
 cy.screenshot(' Before Login Test');
 
 //click on login button
    cy.get('.btn-gradient-primary').click();


    
    //screenshot
    cy.screenshot(' After Login Test');
   







    });
