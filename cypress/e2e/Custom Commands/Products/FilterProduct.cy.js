/// <reference types="cypress" />
// Filter Product


it('Filter Create', function(){ 
    
    //LOGIN
   cy.login();
   
   //goto Products
   cy.gotoproducts();

   //filter product
   cy.filterproduct('Jeans Pants' ,'Kokroma', 'Zara', 'Active');   
   
        });
    