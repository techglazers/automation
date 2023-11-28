/// <reference types="cypress" />
//CRUDF FOR Banner


it('Banners', function(){ 
    
    //LOGIN
   cy.login();
   
   //goto Orders
   cy.gotobanner();
  
   //filter updated banner
   cy.filterbanner('Happy', 'Active');
   
   //delete banner
   cy.deletebanner();
   
        });
    