/// <reference types="cypress" />
// Create Product


it('Product Create', function(){ 
    
    //LOGIN
   cy.login();
   
   //goto Products
   cy.gotoproducts();

   //create product
   cy.createproduct('Jeans Pants', 'Nice Product', 'Jeans', 'Nice Nice', 'Kokroma', 'Zara', '100', 'Yes', 'Active');
   //Parameters:         name,               subdes,     proddet,   proddes,      vendor, brand,  price, pop,   status
   //Pauses before Submission to insert Campaign and Select Category
   
        });
    