/// <reference types="cypress" />
//Read Category


it('read', function(){ 
    
    //LOGIN
   cy.login();
   
   //goto category
   cy.gotocategory();
   
  //filter category
  cy.filtercategory('Baggies', 'Pants', 'Inactive');
  //                keyword   parent   status  

  //read category //actions= edit/close at first, and if action =edit then parameters=parent, name and status
  cy.readcategory('edit', 'Pants', 'Bag', 'Active');

  //for cancel:
//cy.readcategory('cancel');
 
});
    