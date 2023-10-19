/// <reference types="cypress" />
//CRUDF FOR Banner


it('Banners', function(){ 
    
    //LOGIN
   cy.login();
   cy.screenshot('1');
   //goto Orders
   cy.gotobanner();
   cy.screenshot('2');
   //Create banner
   cy.createbanner('Happy Dashain', 'Inactive', '1');
   cy.screenshot('3');
   //filter banner
   cy.filterbanner('Happy Das', 'Inactive');
   cy.screenshot('4');
   //edit banner
   cy.get('[href*="http://kidoclo.mrturingdev.com/admin/banner/"] > .bx').eq(0).click();  //clicking top of filtered result
   cy.editbanner('Happy tihar', 'Active', '2');
   cy.screenshot('5');

   //filter updated banner
   cy.filterbanner('Happy ti', 'Active');
   cy.screenshot('6');
   //read banner
   cy.readbanner('close');
   cy.screenshot('7');
   //delete banner
   cy.deletebanner();
   cy.screenshot('8');
        });
    