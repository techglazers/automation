
/// <reference types="cypress" />
//Create Operations for Coupon


it('Create', function(){ 
    
    //LOGIN
   cy.login();
   
   //goto coupon
   cy.gotocoupon();
  
   //create coupon
   cy.createcoupon('Diss', 'D10@#$', '-100', 'Percentage','-57','-79', 'Inactive','1'); 
    //(Disc Name, Disc Code, Discount, Discount Type, 'Minm Purchase', 'Limit of %', 'Status','Sort by')
    

 
   
});
    