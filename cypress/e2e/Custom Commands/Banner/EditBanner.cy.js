/// <reference types="cypress" />
//CRUDF FOR Banner


it('Banners', function(){ 
    
    //LOGIN
   cy.login();
   
   //goto Orders
   cy.gotobanner();
  
   
   //filter banner
   cy.filterbanner('Happy Das', 'Inactive');
  
   //edit banner
   cy.get('[href*="http://kidoclo.mrturingdev.com/admin/banner/"] > .bx').eq(0).click();  //clicking top of filtered result
   cy.editbanner('Happy tihar', 'Active', '2');
   

   
   
        });
    