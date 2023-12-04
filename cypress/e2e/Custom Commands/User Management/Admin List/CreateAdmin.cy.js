/// <reference types="cypress" />
//Create Admin


it('Create Admin', function(){ 
    
    //LOGIN
   cy.login();
   
   //GOTO ADMIN
   cy.gotoadmin();

   //Create Admin
   cy.createadmin('Achyut', 'Ghatey', 'achyutghaire@gmail.com', 'Al1234567', 'Al1234567', '9861616015', 'Admin', 'Active');
   // Paramaeters:FName    Lname       email              pw        cpw           number    Role        Status
   
   
        });
    