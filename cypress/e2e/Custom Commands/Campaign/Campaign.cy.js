/// <reference types="cypress" />
//CRUDF Operations for Campaign


it('Campaign', function(){ 
    
    //LOGIN
   cy.login();
   
   //goto Campaign
   cy.gotocampaign();
  
  //create new campaign
  cy.createcampaign('Heavy Discount', 'This is about heavy Discount.', 'Yes', 'General','Active');
  //Order:               //Name            //Description     //Unlimited: Yes/No  Type:General/Discount  Status:Active/Inactive 
  
    
        });
    