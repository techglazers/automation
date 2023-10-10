import HomePage from "../PomTestingLocators/HomePage";
import Coupon from "../PomTestingLocators/Coupon";
import NavToSize from "../PomTestingLocators/NavToSize";

describe('Create Coupon', () => {

    it('should create new Coupon', () => {

        cy.login();   //custom command

        NavToSize.menuclick();
        Coupon.couponclick();
       
        Coupon.addnewCoup();
        cy.scrollTo('top');
        Coupon.coupnameInput('Happy Birthday');
        Coupon.codenameInput('HBD');
        Coupon.discount('100');
        Coupon.discounttype('Percentage');
        Coupon.minmpurchase('100');
        Coupon.limit('100');
        Coupon.status('Inactive');
        Coupon.sortby('1');
        cy.pause();   
        //resume manually for entering pics

        Coupon.SubmitBtn();

        
       

        



        


       



    });

   


})