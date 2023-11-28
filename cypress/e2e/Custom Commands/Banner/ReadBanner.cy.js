/// <reference types="cypress" />
//CRUDF FOR Banner


it('Banners', function(){ 
    
    //LOGIN
   cy.login();
   
   //goto Orders
   cy.gotobanner();
  
   //filter updated banner
   cy.filterbanner('Happy ti', 'Active');
   
   //read banner
  // cy.readbanner('close');

   //read Edit
   cy.readbanner('edit', 'Happy Chhath', 'Active', '12');
  
        });
    