/// <reference types="cypress" />
//Filter Customer


it('Filter customer', function(){ 
    
    //LOGIN
   cy.login();
   
   //GOTO Customer
   cy.gotocustomer();

   //filter Customer
   cy.filtercustomer('a', 'Inactive');

   
   
   
   
        });
    