/// <reference types="cypress" />
//Filter Customer


it('Filter customer', function(){ 
    
    //LOGIN
   cy.login();
   
   //GOTO Customer
   cy.gotocustomer();

   //filter Customer
   cy.filtercustomer('achyutam', 'Inactive');

   //read customer
   cy.readcustomer('close');

   //for read and edit
   cy.readcustomer('edit', 'Achyut', 'Gaihre', 'Abcd1234', 'Abcd1234', '9813737264', 'Active');

   
   
   
   
        });
    