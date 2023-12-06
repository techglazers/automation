/// <reference types="cypress" />
//Read Vendor


it('Read Vendor', function(){ 
    
    //LOGIN
   cy.login();
   
   //GOTO ADMIN
   cy.gotovendor();

   //Filter Vendor
   cy.filtervendor('Adani', 'Active');
   
   //readvendor
//cancel
   cy.readvendor('close');
   //edit
   cy.readvendor('edit','Ambani', 'Ambani Group', 'ambanigaarp@gmail.com', '9861696715', 'Nepal', 'Madhesh Province', 'Lalitspur', 'Gwarko', 'Inactive');
        });
    