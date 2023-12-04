/// <reference types="cypress" />
//Filter Admin


it('Filter Admin', function(){ 
    
    //LOGIN
   cy.login();
   
   //GOTO ADMIN
   cy.gotoadmin();

   //Filter Admin
   cy.filteradmin('Ach', 'Admin', 'Active');
   
   //Read Admin
   //cy.readadmin('close');

   //Edit admin from Read
   cy.readadmin('edit', 'Rupa', 'Frontline', 'Rupa1234', 'Rupa1234', '9864476545', 'Admin', 'Active');
   
   
        });
    