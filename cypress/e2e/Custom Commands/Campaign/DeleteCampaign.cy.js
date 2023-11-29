/// <reference types="cypress" />
//Delete Operations for Campaign


it('Campaign', function(){ 
    
    //LOGIN
   cy.login();
   
   //goto Campaign
   cy.gotocampaign();
  
  
    //filter campaign
   cy.filtercampaign('Hea', 'Inactive');
    
   //delete campaign
   cy.deletecampaign();
        });
    