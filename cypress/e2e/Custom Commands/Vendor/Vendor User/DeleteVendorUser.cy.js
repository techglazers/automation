/// <reference types="cypress" />
//Delete Vendor User


it('Delete Vendor user', function(){ 
    
    //LOGIN
   cy.login();
   
   //GOTO ADMIN
   cy.gotovendoruser();

   //filter vendor user
   cy.filtervendoruser('Rabik', 'Active');
   //                   keyword   status

   //delete vendor user
   cy.delete();
        });
    