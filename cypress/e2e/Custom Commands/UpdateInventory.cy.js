/// <reference types="cypress" />
//add a new brand without image


it('Brand Name Create', function(){ 
    
    //LOGIN
   cy.login();

   //go to inventory
   cy.gotoinventory();
   
   //update inventory
   cy.get('.col-md-3 > #DataTables_Table_0_length > label > .dt-button').click();
   cy.updateinventory('Kids O\' Clo', 'Floral printed tshirt');
        });
    