/// <reference types="cypress" />
//add a new brand without image


it('Brand Name Create', function(){ 
    
    //LOGIN
   cy.login();

   //goto brand
   cy.gotobrand();

   //create brand name and select status
   //will pause so that user can enter picture manually and has to be manually resumed after insertion
   cy.createbrand('Jordans','Active'); 

   //filter brand
   cy.filterbrand('Jordans','Active');


   //edit brand
   cy.get('.text-nowrap > [href*="/admin/brand/"]').first().click();
   cy.editbrand('Jordindian', 'Inactive');

   
 //filter brand
 cy.filterbrand('Jordindian', 'Inactive');

//read brand
cy.readbrand('edit', 'Jordan', 'Active');



  //filter brand
  cy.filterbrand('Jordan', 'Active');

  
  

   //delete brand
   cy.deletebrand();

    
        });
    