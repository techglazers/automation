/// <reference types="cypress" />
//Remove First Product from campaign


it('Campaign', function(){ 
    
    //LOGIN
   cy.login();
   
   //goto Campaign
   cy.gotocampaign();
  
  
    //filter campaign
   cy.filtercampaign('Hea', 'Active');

   //Add Product to Campaign
   cy.removeproductfromcamp();
    
        });
    