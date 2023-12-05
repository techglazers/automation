/// <reference types="cypress" />
//Filter Role


it('Filter Role', function(){ 
    
    //LOGIN
   cy.login();
   
   //GOTO role
   cy.gotoroles();

   //Filter role
   cy.filterrole('Ach');


   
   
   
        });
    