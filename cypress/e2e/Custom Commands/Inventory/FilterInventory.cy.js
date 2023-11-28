/// <reference types="cypress" />
//Update Inventory


it('Update Inventory', function(){ 
    
    //LOGIN
   cy.login();
   
   //go to inventory
   cy.gotoinventory();
   
   //filter inventory
   cy.filterinventory('Kokroma','Small');
        });
    