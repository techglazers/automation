/// <reference types="cypress" />
//Filter Admin


it('Filter Admin', function(){ 
    
    //LOGIN
   cy.login();
   
   //GOTO ADMIN
   cy.gotoadmin();

   //Filter Admin
   cy.filteradmin('Ach', 'Admin', 'Active');
   
   
   
        });
    