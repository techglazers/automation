/// <reference types="cypress" />
//Delete CMS


it('delete CMS', function(){ 
    
    //LOGIN
   cy.login();
   
   //goto CMS
   cy.gotocms();
   
   //filter cms
   cy.filtercms('Ppriva', 'Active');

   //delete cms
   cy.delete();
   
   
        });
    