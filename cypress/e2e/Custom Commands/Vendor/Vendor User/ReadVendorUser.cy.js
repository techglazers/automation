/// <reference types="cypress" />
//Read Vendor User


it('Read Vendor user', function(){ 
    
    //LOGIN
   cy.login();
   
   //GOTO ADMIN
   cy.gotovendoruser();

   //filter vendor user
   cy.filtervendoruser('Rabik', 'Inactive');
   //                   keyword   status

   //read vendor user
    cy.readvendoruser('close');
   //action, vendor, fname, lname, pw, cpw, phone, status
   cy.readvendoruser('edit', 'Kokroma', 'Rabik', 'Thapa', 'Miss2345', 'Miss2345', '9878987656', 'Active');
        });
    