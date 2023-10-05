/// <reference types="cypress" />
//add a new brand without image

it('DELETE BRAND', function(){
    //LOGIN
    cy.visit('http://kidoclo.mrturingdev.com//'); 
    cy.get('#email').type('rabikthapa00@gmail.com');
    cy.get('#password').type('P@ssw0rd5789');
    cy.get('.btn').click();

// click on menu
    cy.get('.nav-item > .bx').click();

    //click on brand
    cy.get(':nth-child(5) > .menu-link').click();


    //ADD BRAND
    //click on add a new brand
    cy.get('.col-md-3 > #DataTables_Table_0_length > label > .dt-button').click({ force: true});

    //write brand name
    cy.get('#name').type('Jordans');

    //select status
    cy.get('#status')
    .select('Inactive');

    //can't select image

    //select on submit
    cy.get('.btn-primary').click();
   


    //SEARCH PROCESS
    //type keyword
    cy.get('.form-control').type('Jordans',{ force: true});

    //select status
    cy.get('#search_status').select('Inactive',{ force: true});

    //click on filter button
    cy.get(':nth-child(3) > .dt-button').click({ force: true});


    //Edit PROCESS

    //click on edit icon
    cy.get('[href="http://kidoclo.mrturingdev.com/admin/brand/37/edit"] > .bx').click();

    //edit name
    cy.get('#name').type('Jord');

    //edit status
    cy.get('#status').select('Active');

    //click on confirm button
    cy.get('.btn-primary').click();






    });
