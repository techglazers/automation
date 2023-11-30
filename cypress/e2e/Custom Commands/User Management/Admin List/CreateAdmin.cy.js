/// <reference types="cypress" />
//Create Admin


it('Create Admin', function(){ 
    
    //LOGIN
   cy.login();
   
   //GOTO ADMIN
   cy.gotoadmin();

   //Create Admin
   cy.createadmin('Achyut', 'Ghatey', 'achyutgh@gmail.com', 'Al1234567', 'Al1234567', '9861616014', 'Admin', 'Active');
   // Paramaeters:FName    Lname       email              pw        cpw           number    Role        Status
   
   
        });
    