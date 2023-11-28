/// <reference types="cypress" />
//Create FOR SIZE


it('CRUDF SIZE', function(){ 
    
    //LOGIN
   cy.login();
   
   //goto size
   cy.gotosize();
   
   //create new size
   cy.get('.col-md-3 > #DataTables_Table_0_length > label > .dt-button').click({force: true});
   cy.createsize('Medium', 'M', 'Active');
  
   
        });
    