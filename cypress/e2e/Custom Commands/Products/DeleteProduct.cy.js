/// <reference types="cypress" />
// Delete Product


it('Delete Create', function(){ 
    
    //LOGIN
   cy.login();
   
   //goto Products
   cy.gotoproducts();

   //filter product
   cy.filterproduct('Jeans Pants' ,'Kokroma', 'Zara', 'Active');   

   //delete product
   cy.delete();
   
        });
    