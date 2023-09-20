/// <reference types="cypress" />
//create vendor
it('Create Vendor', function(){
    //LOGIN
    cy.visit('http://kidoclo.mrturingdev.com//'); 
    cy.get('#email').type('rabikthapa00@gmail.com');
    cy.get('#password').type('P@ssw0rd5789');
    cy.get('.btn').click();

// click on menu
    cy.get('.nav-item > .bx').click();

    //click on vendor
    cy.get(':nth-child(3) > .menu-toggle').click();

    //click on vendor>>vendor
    cy.get('.open > .menu-sub > :nth-child(1) > .menu-link').click();

    //click on Add New Vendor
    cy.get('.col-md-3 > #DataTables_Table_0_length > label > .dt-button').click();

    //write name
    cy.get('#name').type('Ambani Group',{ force: true});

    //owner name
    cy.get('#owner').type('Mukesh Ambani',{ force: true});

    //email 
    cy.get('#email').type('mukku@gmail.com',{ force: true});

    //phone
    cy.get('#phone').type('9864474274',{ force: true});

    //select state
    cy.get('#address_provience_state').select('Province No. 1',{ force : true});
    //cy.get('cy.get('#address_provience_state')').select('Madhesh Province',{ force : true});
    //cy.get('#address_provience_state').select('Bagmati Province',{ force : true});
    //cy.get('#address_provience_state').select('Gandaki Province',{ force : true});
    //cy.get('#address_provience_state').select('Lumbini Province',{ force : true});
    //cy.get('#address_provience_state').select('Karnali Province',{ force : true});
   // cy.get('#address_provience_state').select('Sudurpaschim Province',{ force : true});

   //write city
   cy.get('#address_city').type('Kathmandu');

   //write address
   cy.get('#address_line_1').type('Dhapakhel');

//cannot insert image

   //select status
   cy.get('#status').select('Inactive');

   //click on confirm button
   cy.get('.btn-primary').click();

    

    




    });
