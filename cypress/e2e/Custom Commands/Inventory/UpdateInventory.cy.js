/// <reference types="cypress" />
//Update Inventory


it('Update Inventory', function(){ 
    
    //LOGIN
   cy.login();
   
   //go to inventory
   cy.gotoinventory();
   
   //update inventory
   //                 (Vendor,         Product   ,              Size,   Color, QTY,   Type)
   cy.updateinventory('Kokroma', 'LAYERED DUNGAREES', 'Small','Red','101','Purchase Return');
   
   
   
        });
    