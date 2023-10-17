/// <reference types="cypress" />
//add a new brand without image


it('Brand Name Create', function(){ 
    
    //LOGIN
   cy.login();

   //go to inventory
   cy.gotoinventory();
   
   //update inventory
   
   cy.updateinventory('Kids O\' Clo', 'Flower Printed Tshirt', 'Medium','Red','101','Restocked');
  
   
        });
    