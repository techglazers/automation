/// <reference types="cypress" />
//Create Role


it('Create Role', function(){ 
    
    //LOGIN
   cy.login();
   
   //GOTO role
   cy.gotoroles();

   //CREATE ROLE
   cy.createrole('Achyut', 'Active');


   
   
   
        });
    