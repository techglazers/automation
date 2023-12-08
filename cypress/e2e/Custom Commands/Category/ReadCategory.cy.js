/// <reference types="cypress" />
//Read Category


it('read', function(){ 
    
    //LOGIN
   cy.login();
   
   //goto category
   cy.gotocategory();
   
  //filter category
  cy.filtercategory('baggy', 'shirt', 'Active');
  //                keyword   parent   status  


  //for cancel:
cy.readcategory('close');
  //read category //actions= edit/close at first, and if action =edit then parameters=parent, name and status
  cy.readcategory('edit', 'Pants', 'Bag', 'Active');

  
 
});
    