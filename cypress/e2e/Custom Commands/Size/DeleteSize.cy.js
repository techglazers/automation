/// <reference types="cypress" />
//CRUD and FILTER FOR SIZE


it('CRUDF SIZE', function(){ 
    
    //LOGIN
   cy.login();
   
   //goto size
   cy.gotosize();
   
   //filter for delete
   cy.filtersize('Large');
   
   //delete size
   cy.deletesize();
   
        });
    