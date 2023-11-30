/// <reference types="cypress" />
//Create Operations for Category


it('Create', function(){ 
    
    //LOGIN
   cy.login();
   
   //goto category
   cy.gotocategory();
   
  //create a new category
  cy.createcategory('Pants', 'Baggy Pants', 'Active');
   //               Parent     Name         Status
//and it pauses to insert pic   
    

 
   
});
    