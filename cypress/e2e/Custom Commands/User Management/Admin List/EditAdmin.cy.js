/// <reference types="cypress" />
//Filter Admin


it('Filter Admin', function(){ 
    
    //LOGIN
   cy.login();
   
   //GOTO ADMIN
   cy.gotoadmin();

   //Filter Admin
   cy.filteradmin('Rup', 'Admin', 'Active');
   
   //Edit Admin
   cy.get('[href*="kidoclo.mrturingdev.com/admin/user/admin"] > .bx').eq(0).click();
   cy.editadmin('Ghachyut', 'Airee', 'Abc123byu', 'Abc123byu', '9843743333', 'Admin', 'Active');
   
   
        });
    