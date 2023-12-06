/// <reference types="cypress" />
//Create Vendor


it('Create Vendor', function(){ 
    
    //LOGIN
   cy.login();
   
   //GOTO ADMIN
   cy.gotovendor();

   //create vendor
   cy.createvendor('Adani', 'Adani Group', 'adanigaarp@gmail.com', '9861616715', 'Nepal', 'Bagmati Province', 'Lalitpur', 'Gwarko', 'Active');
   //Parameters:    Name      Owner             email              phone       country      Province          City       Address   Status
   //It also pauses to enter logo.
   
        });
    