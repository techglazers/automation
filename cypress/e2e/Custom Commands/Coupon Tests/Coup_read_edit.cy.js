import Coupon from "../../PomTestingLocators/Coupon";
/// <reference types="cypress" />
//Read Operations for Coupon


it('Read', function(){ 
    
    //LOGIN
   cy.login();
   
   //goto coupon
   cy.gotocoupon();
  
     
   //filter coupon
   cy.filtercoupon('Dissat', 'Active');
   
   //read coupon
   //(Action, Disc Name, Disc Code, DIscount, Discount Type, 'Limit of %', 'Minimum purchase', 'Status','Sort by')
  //cy.readcoupon('edit', 'Dissat', 'd100', '100', 'Flat', '0', '20','Active','3');
  
  //read coupon but cancel
  cy.readcoupon('cancel');
   
});
    