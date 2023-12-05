/// <reference types="cypress" />
//Create Customer


it('Create customer', function(){ 
    
    //LOGIN
   cy.login();
   
   //GOTO Customer
   cy.gotocustomer();

   //Create Customer
   cy.createcustomer('Ghachyut', 'Ghaire', 'ghachyutamachyutam@gmail.com', 'Abcd1234', 'Abcd1234', '9851024256', 'Active');
//Parameters:         Fname       Lname       Email                         Pw          Cpw           Num         Status
   
   
   
        });
    