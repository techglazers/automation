import Coupon from "../PomTestingLocators/Coupon";
/// <reference types="cypress" />
//add a new brand without image


it('Brand Name Create', function(){ 
    
    //LOGIN
   cy.login();

   //goto coupon
   cy.gotocoupon();

   //create coupon
   cy.createcoupon('Diss', 'D10', '100', 'Flat','100');  //(Disc Name, Disc Code, DIscount, Discount Type, 'Limit of %')
   Coupon.minmpurchase('100');
   Coupon.status('Inactive');
   Coupon.sortby('1');
   cy.pause();   //for inserting pics manually
   Coupon.SubmitBtn();

    
        });
    