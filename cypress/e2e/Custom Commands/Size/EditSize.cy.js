/// <reference types="cypress" />
//Edit SIZE


it('CRUDF SIZE', function(){ 
    
    //LOGIN
   cy.login();
   
   //goto size
   cy.gotosize();
   
  
   //filter for edit size
   cy.filtersize('Medium');
   
   //edit size
   cy.editsize('Large', 'L', 'Active');
   
   
        });
    