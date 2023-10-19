/// <reference types="cypress" />
//update inventory
it('Update Inventory', function(){
    //LOGIN
    cy.visit('http://kidoclo.mrturingdev.com//'); 
    cy.get('#email').type('rabikthapa00@gmail.com');
    cy.get('#password').type('P@ssw0rd5789');
    cy.get('.btn').click();

// click on menu
    cy.get('.nav-item > .bx').click();

    //click on inventory
    cy.get(':nth-child(9) > .menu-link').click();

    //click on update inventory
    cy.get('.col-md-3 > #DataTables_Table_0_length > label > .dt-button').click({ force: true});
  
    //select vendor
    cy.get('#vendor_id').select('Kids O\' Clo', {force: true});

    //select product:
    // Click to open the Select2 dropdown
    cy.get('#select2-product-id-container').click();

    // Select the desired option from the dropdown list
    cy.get('.select2-dropdown').contains('sweater').click();


    //select size
    cy.get('#size_id').select('Small');

    //type color
    cy.get('#color').type('RED');

    //select color hex



    //select qty
    cy.get('#quantity').type('12');

    //select type
    cy.get('#type').select('Restocked');
    
    //click on submit
    cy.get('.btn-primary').click();


    });
