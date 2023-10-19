/// <reference types="cypress" />
//CRUDF Operations for Campaign


it('Campaign', function(){ 
    
    //LOGIN
   cy.login();
   cy.screenshot('1');
   //goto Campaign
   cy.gotocampaign();
   cy.screenshot('2');
    
        });
    