/// <reference types="cypress" />
//Create Vendor User


it('Create Vendor user', function(){ 
    
    //LOGIN
   cy.login();
   
   //GOTO ADMIN
   cy.gotovendoruser();

  //create vendor user
  cy.createvendoruser('Kokroma', 'Rabik', 'Thapa', 'rasora00@gmail.com', 'Miss1234', 'Miss1234', '9876543230', 'Active');
   //parameters:        vendor,   fname,  lname,        email,               pw,       cpw,           phone,    status
   //Pauses to upload profile picture
        });
    