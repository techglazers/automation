import Coupon from "../PomTestingLocators/Coupon";
/// <reference types="cypress" />
//CRUD and FILTER Operations for Coupon


it('CRUDF', function(){ 
    
    //LOGIN
   cy.login();
   
   //goto coupon
   cy.gotocoupon();
  
   //create coupon
   cy.createcoupon('Diss', 'D10', '100', 'Flat','100','100', 'Active','1'); 
    //(Disc Name, Disc Code, DIscount, Discount Type, 'Limit of %', 'Minimum purchase', 'Status','Sort by')
    

   //filter coupon
    cy.filtercoupon('Diss', 'Active');
    
    //edit coupon
    //(Disc Name, Disc Code, DIscount, Discount Type, 'Limit of %', 'Minimum purchase', 'Status','Sort by')
    cy.get('[href*="http://kidoclo.mrturingdev.com/admin/coupon/"] > .bx').click({force: true});
    cy.editcoupon('Dissa', 'd10', '120', 'Percentage', '19', '20','Inactive','2');
    
   
   //filter coupon
   cy.filtercoupon('Dissa', 'Inactive');
   
   //read coupon
   //(Action, Disc Name, Disc Code, DIscount, Discount Type, 'Limit of %', 'Minimum purchase', 'Status','Sort by')
  cy.readcoupon('edit', 'Dissat', 'd100', '100', 'Flat', '0', '20','Active','3');
  
  //filter coupon
  cy.filtercoupon('Dissat', 'Active');


    //delete coupon
   cy.deletecoupon();
   
});
    