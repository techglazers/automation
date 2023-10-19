/// <reference types="cypress" />
//Update Inventory


it('Update Inventory', function(){ 
    
    //LOGIN
   cy.login();
   cy.screenshot('1');
   //go to inventory
   cy.gotoinventory();
   cy.screenshot('2');
   //update inventory
   //                 (Vendor,         Product   ,              Size,   Color, QTY,   Type)
   cy.updateinventory('Kids O\' Clo', 'Flower Printed Tshirt', 'Medium','Red','101','Purchase Return');
   cy.screenshot('3');
   //filter inventory
   cy.filterinventory('Flower','Medium');
   cy.screenshot('4');
   //read inventory
   cy.readinventory();
   cy.screenshot('5');
   //delete inventory
   cy.deleteinventory();
   cy.screenshot('6');
        });
    