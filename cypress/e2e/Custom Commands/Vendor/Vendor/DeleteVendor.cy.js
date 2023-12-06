/// <reference types="cypress" />
//Delete Vendor


it('Delete Vendor', function(){ 
    
    //LOGIN
   cy.login();
   
   //GOTO ADMIN
   cy.gotovendor();

   //Filter Vendor
   cy.filtervendor('Adani', 'Active');

   //DELETE VENDOR
   cy.delete();
   
        });
    