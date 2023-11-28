/// <reference types="cypress" />
// FILTER FOR SIZE


it('CRUDF SIZE', function(){ 
    
    //LOGIN
   cy.login();
   
   //goto size
   cy.gotosize();
   
   //filter for edit size
   cy.filtersize('Medium');
        });
    