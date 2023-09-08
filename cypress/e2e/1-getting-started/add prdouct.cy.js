/// <reference types="cypress" />

it('CATEGORIES SEARCH', function(){
    //LOGIN
    cy.visit('http://kidoclo.mrturingdev.com//'); 
    cy.get('#email').type('rabikthapa00@gmail.com');
    cy.get('#password').type('P@ssw0rd5789');
    cy.get('.btn').click();

// click on menu
    cy.get('.nav-item > .bx').click();

    //click on products
    cy.get(':nth-child(8) > .menu-link').click();
    
    //click on add new product
    cy.get('#DataTables_Table_0_length > label > .dt-button').click({ force: true});

    //write product name
    cy.get('#name').type('Style', { force: true });

    //write product sub description
    cy.get('#sub_description').type('This is the Sub description For Stylish Pants.', { force: true });


    //product detail
    





    //product description
    cy.get('.ql-editor').type('This is Product Description');

    //campaign:
    // Open the dropdown (you might need to click on it or take the appropriate action to open it)
      cy.get('.select2-selection__rendered').click();

    // Locate and select the desired option within the dropdown (assuming it has a specific label or value)
       cy.contains('.select2-results__option', 'Festive Sale').click();

    
    //select vendor
    cy.get('#vendor_id').select('Adani Group', { force: true});

    //select brand
    cy.get('#brand_id').select('Uniqlo', { force: true});

    //select category
    cy.get('#category_id').select('Pyjamas', { force: true});

    //price
    cy.get('#price').type('100',  { force: true});

    //select popularity 
    cy.get('#is_popular').select('Yes',  { force: true});

    //select top seller
    cy.get('#is_top_seller').select('Yes',  { force: true});

    //select Status
    cy.get('#status').select('In Review', { force: true});

    //click on Submit
    cy.get('.btn-primary').click();


   

    });
