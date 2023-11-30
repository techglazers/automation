/// <reference types="cypress" />
//Filter for Category


it('Filter', function(){ 
    
    //LOGIN
   cy.login();
   
   //goto category
   cy.gotocategory();
   
  //filter category
  cy.filtercategory('Baggy', 'Pants', 'Active');   
    

 
   
});
    