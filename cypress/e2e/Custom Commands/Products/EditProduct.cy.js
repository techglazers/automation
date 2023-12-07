/// <reference types="cypress" />
// Edit Product


it('Edit Create', function(){ 
    
    //LOGIN
   cy.login();
   
   //goto Products
   cy.gotoproducts();

   //filter product
   cy.filterproduct('Jeans Pant' ,'Kokroma', 'Zara', 'Active');   
   
   //edit product
   cy.get('[href*="kidoclo.mrturingdev.com/admin/products/"][href*="/edit"] > .bx').click();
   cy.editproduct('Jeans Pant', 'Nice Product Must Buy', 'Jeans for  Men', 'Nice Nice', 'Kokroma', 'Zara', '100', 'Yes', 'Active');
   //Parameters:         name,               subdes,          proddet,        proddes,   vendor,   brand,  price,   pop,   status
   //Pauses before Submission to insert Campaign and Select Category
        });
    