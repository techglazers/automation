/// <reference types="cypress" />
//add a new brand without image


it('Brand Name Create', function(){ 
    
//LOGIN
cy.login();
// click on menu
    //goto brand
   cy.gotobrand();
   
   //create brand name and select status
   //will pause so that user can enter picture manually and has to be manually resumed after insertion
   cy.get('.col-md-3 > #DataTables_Table_0_length > label > .dt-button').click({force: true});
   cy.createbrand('Jordans','Active'); 
   
    
    });
