/// <reference types="cypress" />
//EDIT Campaign


it('Campaign', function(){ 
    
    //LOGIN
   cy.login();
   
   //goto Campaign
   cy.gotocampaign();
  
  
    //filter campaign
   cy.filtercampaign('Hea', 'Active');

   //EDIT CAMPAIGN
   //create new campaign
  cy.editcampaign('Heavy Discount 101', 'This is about heavy Discount', 'Yes', 'Discount','Inactive');
  //Order:               //Name            //Description     //Unlimited: Yes/No  Type:General/Discount  Status:Active/Inactive 
    //pause to set date for unlimited = no
        });
    