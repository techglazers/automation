/// <reference types="cypress" />
//Filter CMS


it('filter CMS', function(){ 
    
    //LOGIN
   cy.login();
   
   //goto CMS
   cy.gotocms();
   
   //filter cms
   cy.filtercms('Ppria', 'Active');

   //read cms
//1.for cancel
   cy.readcms('close');
//2.for edit
cy.readcms('edit', 'Ppariacy', 'Praivaacy Policy 1', 'This is new privacy policy.', 'About Us', 'Inactive', '3');
   
   
        });
    