/// <reference types="cypress" />
// Read Product


it('Read Create', function(){ 
    
    //LOGIN
   cy.login();
   
   //goto Products
   cy.gotoproducts();

   //filter product
   cy.filterproduct('Jeans Pant' ,'Kokroma', 'Zara', 'Active'); 
   
   //read product
   //1.Close
   cy.readproduct('close');

   //2.Edit
   cy.readproduct('edit','Jeans Pants', 'Nice Product Must Buy 2', 'Jeans for  Men', 'Nice Nice', 'Kokroma', 'Zara', '1000', 'Yes', 'Active');
   //Parameters:         name,               subdes,          proddet,        proddes,   vendor,   brand,  price,   pop,   status
   //Pauses before Submission to insert Campaign and Select Category
   
   //3. ViewImages: Have to do it Manually
        });
    