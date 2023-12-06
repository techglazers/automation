/// <reference types="cypress" />
//Filter Vendor


it('Filter Vendor', function(){ 
    
    //LOGIN
   cy.login();
   
   //GOTO ADMIN
   cy.gotovendor();

   //Filter Vendor
   cy.filtervendor('Adani', 'Active');
   
        });
    