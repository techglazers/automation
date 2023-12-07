/// <reference types="cypress" />
//Filter Subsciption


it('Subscription Filter', function(){ 
    
    //LOGIN
   cy.login();
   
   //goto Subsciprion
   cy.gotosubscription();
   
   //filter subscription
   cy.filtersubscription('Alavin', 'Quarterly', 'Active');
   
   //edit subscription
   cy.editsubscription('Alavin', 'Toffaler', 'Quarterly', '6 Month', '-100', '-100', '-10', 'Active');
   //Parameters:           name,   description, type,     duration,   price, reward, carryover, status
   //pauses if duration are multiple
        });
    