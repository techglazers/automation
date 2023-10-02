/// <reference types="cypress" />
//add product --create
it('Add Product', function(){
    //LOGIN
    cy.visit('http://kidoclo.mrturingdev.com//'); 
    cy.get('#email').type('rabikthapa00@gmail.com');
    cy.get('#password').type('P@ssw0rd5789');
    cy.get('.btn').click();

// click on menu
    cy.get('.nav-item > .bx').click();

    //click on products
    cy.get(':nth-child(8) > .menu-link').click();

    //SEARCH PROCESS
    //write keyword
    cy.get('.form-control').type('Style',{force: true});

    //select vendor
    cy.get('#search_vendor').select('Adani Group',{force: true});

    //select brand
    cy.get('#search_brand').select('Uniqlo',{force: true});

    //select status
    cy.get('#search_status').select('In Review',{force: true});

    //click on filter button
    cy.get('.col-12 > label > .dt-button').click({force: true});
   

    
    


   

    });
