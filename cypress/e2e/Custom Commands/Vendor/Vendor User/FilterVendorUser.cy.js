/// <reference types="cypress" />
//Filter Vendor User


it('Filter Vendor user', function(){ 
    
    //LOGIN
   cy.login();
   
   //GOTO ADMIN
   cy.gotovendoruser();

   //filter vendor user
   cy.filtervendoruser('Rabik', 'Active');
        });
    