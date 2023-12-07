/// <reference types="cypress" />
//Edit CMS


it('edit CMS', function(){ 
    
    //LOGIN
   cy.login();
   
   //goto CMS
   cy.gotocms();
   
   //filter cms
   cy.filtercms('Ppriva', 'Active');
   
   //edit cms
   cy.get('[href*="kidoclo.mrturingdev.com/admin/cms"] > .bx').click();
   cy.editcms('Ppriacy', 'Privaacy Policy 1', 'This is new privacy policy.', 'About Us', 'Active', '2');
  //parameters: title, subtitle, description, type, status, sort

        });
    