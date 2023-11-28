/// <reference types="cypress" />
//CRUDF FOR Banner


it('Banners', function(){ 
    
    //LOGIN
   cy.login();
   
   //goto Orders
   cy.gotobanner();
  
   
   
   //filter banner
   cy.filterbanner('Happy Das', 'Inactive');
  
   
        });
    