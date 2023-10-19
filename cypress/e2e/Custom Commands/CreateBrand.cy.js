/// <reference types="cypress" />
//add a new brand + CRUDF OPERATIONS


it('Brand Name Create', function(){ 
    
    //LOGIN
   cy.login();
   cy.screenshot('1');
   //goto brand
   cy.gotobrand();
   cy.screenshot('2');
   //create brand name and select status
   //will pause so that user can enter picture manually and has to be manually resumed after insertion
   cy.createbrand('Jordans','Active'); 
   cy.screenshot('3');
   //filter brand
   cy.filterbrand('Jordans','Active');
   cy.screenshot('4');

   //edit brand
   cy.get('.text-nowrap > [href*="/admin/brand/"]').first().click();  //click on edit
   cy.editbrand('Jordindian', 'Inactive');
   cy.screenshot('5');
 //filter brand
 cy.filterbrand('Jordindian', 'Inactive');
 cy.screenshot('6');
//read brand
cy.readbrand('edit', 'Jordan', 'Active');
cy.screenshot('7');


  //filter brand
  cy.filterbrand('Jordan', 'Active');
  cy.screenshot('8');
  
  

   //delete brand
   cy.deletebrand();
   cy.screenshot('9');
    
        });
    