import Coupon from "../../PomTestingLocators/Coupon";
/// <reference types="cypress" />
//EDIT Operations for Coupon


it('Edit', function(){ 
    
    //LOGIN
   cy.login();
   
   //goto coupon
   cy.gotocoupon();

   //filter coupon
    cy.filtercoupon('Diss', 'Active');
    
    //edit coupon
    //(Disc Name, Disc Code, DIscount, Discount Type, 'Limit of %', 'Minimum purchase', 'Status','Sort by')
    cy.get('[href*="http://kidoclo.mrturingdev.com/admin/coupon/"] > .bx').click({force: true});
    cy.editcoupon('Dissa', 'd10', '120', 'Percentage', '19', '20','Inactive','2');
    
   
});
    