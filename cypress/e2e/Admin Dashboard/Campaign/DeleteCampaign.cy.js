/// <reference types="cypress" />
//edit in campaign

it('Edit Campaign', function(){
    //LOGIN
    cy.visit('http://kidoclo.mrturingdev.com//'); 
    cy.get('#email').type('rabikthapa00@gmail.com');
    cy.get('#password').type('P@ssw0rd5789');
    cy.get('.btn').click();

// click on menu
    cy.get('.nav-item > .bx').click();

    //click on campaign
    cy.get(':nth-child(11) > .menu-link').click();

    //click on delete icon
    cy.get(':nth-child(1) > :nth-child(8) > .text-nowrap > .delete-record > .bx').click({ force: true});

    //click on confirm
    cy.get('.btn-danger').click();

   
    

    

    
    
    });
