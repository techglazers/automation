/// <reference types="cypress" />
//add a new brand without image


it('Brand Name Create', function(){ 
    
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
    