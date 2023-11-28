/// <reference types="cypress" />
//CRUD and FILTER FOR SIZE


it('CRUDF SIZE', function(){ 
    
    //LOGIN
   cy.login();
   
   //goto size
   cy.gotosize();
   
   //create new size
   cy.get('.col-md-3 > #DataTables_Table_0_length > label > .dt-button').click({force: true});
   cy.createsize('Fat', 'F', 'Active');
  
   //filter for edit size
   cy.filtersize('fat');
   
   //edit size
   cy.editsize('Moto', 'P', 'Active');
   
   //filter for delete
   cy.filtersize('moto');
   
   //delete size
   //cy.deletesize();
   
        });
    