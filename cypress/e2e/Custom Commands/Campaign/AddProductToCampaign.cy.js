/// <reference types="cypress" />
//Add Products for Campaign


it('Campaign', function(){ 
    
    //LOGIN
   cy.login();
   
   //goto Campaign
   cy.gotocampaign();
  
  
    //filter campaign
   cy.filtercampaign('Hea', 'Active');

   //Add Product to Campaign
   cy.addproducttocamp('shirt', 'Zara', 'Kidooclo', 'daura');
    
        });
    