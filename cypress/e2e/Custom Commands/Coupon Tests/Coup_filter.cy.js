
/// <reference types="cypress" />
// FILTER Operations for Coupon


it('Filter', function(){ 
    
    //LOGIN
   cy.login();
   
   //goto coupon
   cy.gotocoupon();
  
   //filter coupon
    cy.filtercoupon('Diss', 'Active');
    
    
   
});
    