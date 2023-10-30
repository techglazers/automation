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
   
   //filter brand
   cy.filterbrand('Jordans','Active');
   

   //edit brand
   cy.get('.text-nowrap > [href*="/admin/brand/"]').first().click();  //click on edit
   cy.editbrand('Jordindian', 'Inactive');
   
 //filter brand
 //cy.filterbrand('Jordindian', 'Inactive');
 
//read brand
//cy.readbrand('edit', 'Jordan', 'Active');



  //filter brand
  //cy.filterbrand('Jordan', 'Active');
  
  

   //delete brand
   //cy.deletebrand();

    
        });
    