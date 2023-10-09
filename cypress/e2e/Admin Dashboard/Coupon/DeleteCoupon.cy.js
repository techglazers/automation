
/// <reference types="cypress" />
//create coupon
it('Create Coupon', function(){
    //LOGIN
    cy.visit('http://kidoclo.mrturingdev.com//'); 
    cy.get('#email').type('rabikthapa00@gmail.com');
    cy.get('#password').type('P@ssw0rd5789');
    cy.get('.btn').click();

// click on menu
    cy.get('.nav-item > .bx').click();

    //click on coupon
    cy.get(':nth-child(13) > .menu-link').click();

     //click on add new coupon
     cy.get('.col-md-3 > #DataTables_Table_0_length > label > .dt-button').click({ force: true});

     //input name
     cy.get('#name').type('Heavy', { force: true});
 
     //input code
     cy.get('#code').type('HV0', { force: true});
 
     //discount
     cy.get('#discount').type('100', { force: true});
 
     //default: flat
 
     //select minm purchase
     cy.get('#min_purchase').type('100');
 
     //select status
     cy.get('#status').select('Inactive');
     
     //order by
     cy.get('#order_by').type('1');
 
     //insert file manually
     
 
 
     //click on confirm button
     cy.get('.btn-primary').click();
     
        


    //SEARCH PROCESS

    //Keyword Insertion
    cy.get('.form-control').type('Heavy',{ force: true});

    //select Status
    cy.get('#search_status').select('Inactive', { force: true});

    //click on filter button
    cy.get(':nth-child(3) > .dt-button').click({ force: true});



    //DELETE PROCESS
    cy.get(':nth-child(1) > :nth-child(8) > .text-nowrap > .delete-record > .bx').click({ force: true});

    //Click on confirm button
    cy.get('.btn-danger').click();



   
       
    
 
      


   

   

    });