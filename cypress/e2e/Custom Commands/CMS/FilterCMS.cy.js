/// <reference types="cypress" />
//Filter CMS


it('filter CMS', function(){ 
    
    //LOGIN
   cy.login();
   
   //goto CMS
   cy.gotocms();
   
   //filter cms
   cy.filtercms('Ppriva', 'Active');
   
   
        });
    