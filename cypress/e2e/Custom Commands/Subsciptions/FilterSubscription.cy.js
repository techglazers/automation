/// <reference types="cypress" />
//Filter Subsciption


it('Subscription Filter', function(){ 
    
    //LOGIN
   cy.login();
   
   //goto Subsciprion
   cy.gotosubscription();
   
   //filter subscription
   cy.filtersubscription('Alvin', 'Quarterly', 'Active');
   
        });
    