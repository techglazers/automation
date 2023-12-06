/// <reference types="cypress" />
//Edit Vendor User


it('Edit Vendor user', function(){ 
    
    //LOGIN
   cy.login();
   
   //GOTO ADMIN
   cy.gotovendoruser();

   //filter vendor user
   cy.filtervendoruser('Rabik', 'Active');
   //                   keyword   status

   //Edit Vendor User
   cy.get('[href*="kidoclo.mrturingdev.com/admin/vendor-user/"][href*="/edit"] > .bx').click();
   cy.editvendoruser('Kidooclo', 'Rabik', 'Thapa', 'Misas1234', 'Misas1234', '9870543230', 'Inactive');
   //parameters:        vendor,   fname,  lname,        email,               pw,       cpw,           phone,    status
   //Pauses to upload profile picture);
        });
    