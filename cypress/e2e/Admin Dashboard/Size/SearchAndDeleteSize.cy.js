/// <reference types="cypress" />
//search and delete size
it('Search and Delete Size', function(){
    //LOGIN
    cy.visit('http://kidoclo.mrturingdev.com//'); 
    cy.get('#email').type('rabikthapa00@gmail.com');
    cy.get('#password').type('P@ssw0rd5789');
    cy.get('.btn').click();

// click on menu
    cy.get('.nav-item > .bx').click();

    //click on size
    cy.get(':nth-child(7) > .menu-link').click();

    //search for size to be deleted
    cy.get('#DataTables_Table_0_length > :nth-child(1) > .form-control').type('sano');
    
    cy.screenshot('1');
    //click on filter
    cy.get(':nth-child(2) > .dt-button').click();

    //click on delete icon
    cy.get(':nth-child(1) > :nth-child(4) > .text-nowrap > .delete-record > .bx').click();
    cy.screenshot('2');
    //click on confirm delete
    cy.get('.btn-danger').click();
    cy.screenshot('3');



    });
