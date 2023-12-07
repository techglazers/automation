/// <reference types="cypress" />
//Creat Subsciption


it('Subscription Create', function(){ 
    
    //LOGIN
   cy.login();
   
   //goto Subsciprion
   cy.gotosubscription();
   
   //create subscription
   cy.createsubscription('Alvin', 'Toffler', 'Quarterly', '9 Month', '-100', '-100', '-10', 'Active');
   //Parameters:           name,   description, type,     duration,   price, reward, carryover, status
   //pauses if duration=multiple
        });
    