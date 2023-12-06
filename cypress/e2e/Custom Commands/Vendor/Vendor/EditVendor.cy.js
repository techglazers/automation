/// <reference types="cypress" />
//Filter Vendor


it('Filter Vendor', function(){ 
    
    //LOGIN
   cy.login();
   
   //GOTO ADMIN
   cy.gotovendor();

   //Filter Vendor
   cy.filtervendor('Adani', 'Active');

   //Edit Vendor
   cy.get('[href*="kidoclo.mrturingdev.com/admin/vendor"] > .bx').click();
   cy.editvendor('Adani', 'Adani Group', 'adanigaarp@gmail.com', '9861616715', 'Nepal', 'Madhesh Province', 'Lalitpur', 'Gwarkko', 'Active');
   
        });
    