/// <reference types="cypress" />
//Delete Customer


it('Delete customer', function(){ 
    
    //LOGIN
   cy.login();
   
   //GOTO Customer
   cy.gotocustomer();

   //filter Customer
   cy.filtercustomer('jav', 'Active');
//Delete
   cy.delete();

   
   
   
   
        });
    