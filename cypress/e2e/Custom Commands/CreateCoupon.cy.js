import Coupon from "../PomTestingLocators/Coupon";
/// <reference types="cypress" />
//CRUD and FILTER Operations for Coupon


it('CRUDF', function(){ 
    
    //LOGIN
   cy.login();
   cy.screenshot('1');
   //goto coupon
   cy.gotocoupon();
   cy.screenshot('2');
   //create coupon
   cy.createcoupon('Diss', 'D10', '100', 'Flat','100','100', 'Active','1'); 
    //(Disc Name, Disc Code, DIscount, Discount Type, 'Limit of %', 'Minimum purchase', 'Status','Sort by')
    cy.screenshot('3');

   //filter coupon
    cy.filtercoupon('Diss', 'Active');
    cy.screenshot('4');
    //edit coupon
    //(Disc Name, Disc Code, DIscount, Discount Type, 'Limit of %', 'Minimum purchase', 'Status','Sort by')
    cy.get('[href*="http://kidoclo.mrturingdev.com/admin/coupon/"] > .bx').click({force: true});
    cy.editcoupon('Dissa', 'd10', '120', 'Percentage', '19', '20','Inactive','2');
    cy.screenshot('5');
   
   //filter coupon
   cy.filtercoupon('Dissa', 'Inactive');
   cy.screenshot('6');
   //read coupon
   //(Action, Disc Name, Disc Code, DIscount, Discount Type, 'Limit of %', 'Minimum purchase', 'Status','Sort by')
  cy.readcoupon('edit', 'Dissat', 'd100', '100', 'Flat', '0', '20','Active','3');
  cy.screenshot('7');
  //filter coupon
  cy.filtercoupon('Dissat', 'Active');
  cy.screenshot('8');

    //delete coupon
   cy.deletecoupon();
   cy.screenshot('9');
});
    