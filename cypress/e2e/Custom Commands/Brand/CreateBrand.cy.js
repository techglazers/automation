/// <reference types="cypress" />
//add a new brand + CRUDF OPERATIONS


it('Brand Name Create', function(){ 
    
    //LOGIN
   cy.login();
   
   //goto brand
   cy.gotobrand();
   
   //create brand name and select status
   //will pause so that user can enter picture manually and has to be manually resumed after insertion
   cy.get('.col-md-3 > #DataTables_Table_0_length > label > .dt-button').click({force: true});
   cy.createbrand('Jordans','Active'); 
   
   
    
        });
    