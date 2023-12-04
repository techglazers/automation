/// <reference types="cypress" />
//Delete for Category


it('Delete', function(){ 
    
    //LOGIN
   cy.login();
   
   //goto category
   cy.gotocategory();
   
  //filter category
  cy.filtercategory('Bag', 'Pants', 'Active');
  //                keyword   parent   status  
 
  //delete category
  cy.delete();

});
    