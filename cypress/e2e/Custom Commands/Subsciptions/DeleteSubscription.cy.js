/// <reference types="cypress" />
//Delete Subsciption


it('Subscription Delete', function(){ 
    
    //LOGIN
   cy.login();
   
   //goto Subsciprion
   cy.gotosubscription();
   
   //filter subscription
   cy.filtersubscription('Alvin', 'Quarterly', 'Active');

   //delete subscription
   cy.delete();
   
        });
    