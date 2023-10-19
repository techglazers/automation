/// <reference types="cypress" />
//CRUD and FILTER FOR SIZE


it('CRUDF SIZE', function(){ 
    
    //LOGIN
   cy.login();
   cy.screenshot('1');
   //goto size
   cy.gotosize();
   cy.screenshot('2');
   //create new size
   cy.createsize('Fat', 'F', 'Active');
   cy.screenshot('3');
   //filter for edit size
   cy.filtersize('fat');
   cy.screenshot('4');
   //edit size
   cy.editsize('Moto', 'P', 'Active');
   cy.screenshot('5');
   //clear filtered results
   cy.get('.clear-filters').click();
   cy.screenshot('6');
   //filter for delete
   cy.filtersize('moto');
   cy.screenshot('7');
   //delete size
   cy.deletesize();
   cy.screenshot('8');
        });
    