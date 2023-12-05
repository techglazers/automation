/// <reference types="cypress" />
//Filter Role


it('Filter Role', function(){ 
    
    //LOGIN
   cy.login();
   
   //GOTO role
   cy.gotoroles();

   //Filter role
   cy.filterrole('President');

   //Select Functionalities
   cy.selectfunction();
  // It pauses so that you can select the functionalities you wish

   
   
   
        });
    