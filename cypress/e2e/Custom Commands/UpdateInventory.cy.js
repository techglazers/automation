/// <reference types="cypress" />
//Update Inventory


it('Update Inventory', function(){ 
    
    //LOGIN
   cy.login();

   //go to inventory
   cy.gotoinventory();
   
   //update inventory
   cy.updateinventory('Kids O\' Clo', 'Flower Printed Tshirt', 'Medium','Red','101','Restocked');
  
   //filter inventory
   cy.filterinventory('Flower', 'Medium');

   //read inventory
   cy.readinventory();

   //delete inventory
   cy.deleteinventory();
   
        });
    