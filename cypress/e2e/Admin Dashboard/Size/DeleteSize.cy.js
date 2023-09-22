/// <reference types="cypress" />
//create new size
it('Create Size', function(){
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
    cy.get('#symbol').type('C');

    //select status
    cy.get('#status').select('Active');
      // cy.get('#status').select('Inactive');
    

      //click on submit button
      cy.get('.text-center > .btn-primary').click();


      //Delete Process Has Started

      
        //search for size to be deleted
    cy.get('#DataTables_Table_0_length > :nth-child(1) > .form-control').type('sano');
    
 
    //click on filter
    cy.get(':nth-child(2) > .dt-button').click();

    //click on delete icon
    cy.get('.delete-record').click();

    //click on confirm delete
    cy.get('.btn-danger').click();
   

    });
