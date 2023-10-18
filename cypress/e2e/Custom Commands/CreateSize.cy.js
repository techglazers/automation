/// <reference types="cypress" />
//CRUD and FILTER FOR SIZE


it('CRUDF SIZE', function(){ 
    
    //LOGIN
   cy.login();
   
   //goto size
   cy.gotosize();

   //create new size
   cy.createsize('Fat', 'F', 'Active');

   //filter for edit size
   cy.filtersize('fat');

   //edit size
   cy.editsize('Moto', 'P', 'Active');

   //clear filtered results
   cy.get('.clear-filters').click();

   //filter for delete
   cy.filtersize('moto');
    
   //delete size
   cy.deletesize();
   
        });
    