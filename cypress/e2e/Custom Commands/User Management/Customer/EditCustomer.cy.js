/// <reference types="cypress" />
//Filter Customer


it('Filter customer', function(){ 
    
    //LOGIN
   cy.login();
   
   //GOTO Customer
   cy.gotocustomer();

   //filter Customer
   cy.filtercustomer('achyutam', 'Inactive');

   //EDIT CUSTOMER
   cy.get('[href*="kidoclo.mrturingdev.com/admin/user/customer"] > .bx').eq(0).click();
   cy.editcustomer('Achyutam', 'Ghachyutam', 'Abcde1234', 'Abcde1234', '9876543223', 'Inactive');

   
   
   
   
        });
    