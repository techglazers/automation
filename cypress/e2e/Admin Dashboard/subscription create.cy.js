/// <reference types="cypress" />
//create new subscription
it('CATEGORIES SEARCH', function(){
    //LOGIN
    cy.visit('http://kidoclo.mrturingdev.com//'); 
    cy.get('#email').type('rabikthapa00@gmail.com');
    cy.get('#password').type('P@ssw0rd5789');
    cy.get('.btn').click();

// click on menu
    cy.get('.nav-item > .bx').click();

    //click on subscription
    cy.get(':nth-child(12) > .menu-link').click();

    //click on create new subscription
    cy.get('.col-md-3 > #DataTables_Table_0_length > label > .dt-button').click({ force: true});

    //subscription name
    cy.get('#name').click({ force: true});
    cy.get('#name').type('New Subscription');

    //sub description
    cy.get('#description').type('This is a new type of Subscription', { force: true});

    //select monthly or quarterly
    //cy.get('#type').select('Monthly');
    cy.get('#type').select('Quarterly', {force: true});

//select duration
   // cy.get('.duration-list > :nth-child(1) > input').click();  //1 month for monthly or 3 month for quarterly
   // cy.get(':nth-child(3) > input').click();   //2 month for monthly or 6 month for quarterly
    cy.get(':nth-child(5) > input').click();  ////3 month for monthly or 9 month for quarterly

    //type price of subscription
    cy.get('#price').type('100');

    //type reward point
    cy.get('#reward_point').type('100');

    //type carry over ratio
    cy.get('#carry_over_ratio').type('10');

    //select Status- Active Or Inactive
   // cy.get('#status').select('Active');
    cy.get('#status').select('Inactive');

    //click on Submit Button
    cy.get('.btn-primary').click();





    });
