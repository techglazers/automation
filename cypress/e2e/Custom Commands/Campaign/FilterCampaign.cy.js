/// <reference types="cypress" />
//CRUDF Operations for Campaign


it('Campaign', function(){ 
    
    //LOGIN
   cy.login();
   
   //goto Campaign
   cy.gotocampaign();
  
  
    //filter campaign
   cy.filtercampaign('Hea', 'Active');
    
        });
    