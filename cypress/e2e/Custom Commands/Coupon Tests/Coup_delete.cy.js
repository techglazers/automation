
/// <reference types="cypress" />
//Delete Operations for Coupon


it('Delete', function(){ 
    
    //LOGIN
   cy.login();
   
   //goto coupon
   cy.gotocoupon();
  
   
  
  //filter coupon
  cy.filtercoupon('Dissat', 'Active');


    //delete coupon
   cy.delete();
   
});
    