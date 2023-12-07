/// <reference types="cypress" />
//Create CMS


it('create CMS', function(){ 
    
    //LOGIN
   cy.login();
   
   //goto CMS
   cy.gotocms();
   
   //create cms
   cy.createcms('Pprivacy', 'Privacy Policy 1', 'This is our privacy policy.', 'Privacy Policy', 'Active', '1');
  //parameters: title, subtitle, description, type, status, sort
   
   
        });
    