/// <reference types="cypress" />
//CRUDF FOR Banner


it('Banners', function(){ 
    
    //LOGIN
   cy.login();
   
   //goto Orders
   cy.gotobanner();
  
   //Create banner
   cy.createbanner('Happy Dashain', 'Inactive', '1');
   
   //filter banner
   cy.filterbanner('Happy Das', 'Inactive');
  
   //edit banner
   cy.get('[href*="http://kidoclo.mrturingdev.com/admin/banner/"] > .bx').eq(0).click();  //clicking top of filtered result
   cy.editbanner('Happy tihar', 'Active', '2');
   

   //filter updated banner
   cy.filterbanner('Happy ti', 'Active');
   
   //read banner
   cy.readbanner('close');
   
   //delete banner
   cy.deletebanner();
   
        });
    