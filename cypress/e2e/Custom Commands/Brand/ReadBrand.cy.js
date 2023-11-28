/// <reference types="cypress" />
//add a new brand + CRUDF OPERATIONS


it('Brand Name Create', function(){ 
    
    //LOGIN
   cy.login();
   
   //goto brand
   cy.gotobrand();
   
 //filter brand
 cy.filterbrand('Jordindian', 'Inactive');
 
//read brand
//cy.readbrand('edit', 'Jordan', 'Active');

//read cancel
cy.readbrand('cancel');
        });
    