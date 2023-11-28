/// <reference types="cypress" />
//add a new brand + CRUDF OPERATIONS


it('Brand Name Create', function(){ 
    
    //LOGIN
   cy.login();
   
   //goto brand
   cy.gotobrand();
   
   //filter brand
   cy.filterbrand('Jordans','Active');
   
   //edit brand
   cy.get('.text-nowrap > [href*="/admin/brand/"]').first().click();  //click on edit
   cy.editbrand('Jordindian', 'Inactive');
        });
    