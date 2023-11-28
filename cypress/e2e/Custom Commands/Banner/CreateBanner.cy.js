/// <reference types="cypress" />
//Filter Banner


it('Banners', function(){ 
    
    //LOGIN
   cy.login();
   
   //goto Orders
   cy.gotobanner();
  
   //Create banner
   cy.createbanner('Happy Dashain', 'Inactive', '1');
   
   
        });
    