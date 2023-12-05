/// <reference types="cypress" />
//Delete Role


it('Delete Role', function(){ 
    
    //LOGIN
   cy.login();
   
   //GOTO role
   cy.gotoroles();

   //Filter role
   cy.filterrole('Ach');
   
   //Delete Role
   cy.delete();


   
   
   
        });
    