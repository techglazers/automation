/// <reference types="cypress" />
//add a new brand + CRUDF OPERATIONS


it('Brand Name Create', function(){ 
    
    //LOGIN
   cy.login();
   
   //goto brand
   cy.gotobrand();
   
   //filter brand
   cy.filterbrand('Jordans','Active');
    
        });
    