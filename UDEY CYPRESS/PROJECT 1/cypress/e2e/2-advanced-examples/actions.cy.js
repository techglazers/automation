/// <reference types="cypress" />

it('CATEGORIES SEARCH', function(){
  //LOGIN
  cy.visit('http://kidoclo.mrturingdev.com')
  cy.get('#email').type('rabikthapa00@gmail.com')
  cy.get('#password').type('P@ssw0rd5789')
  cy.get('.btn').click()

//MENU
  cy.get('.layout-menu-toggle > .nav-item').click()

  //campaigns
  cy.get(':nth-child(11) > .menu-link').click()

  //add a new campaign
  cy.get('.col-md-3 > #DataTables_Table_0_length > label > .dt-button').click()

  cy.get('#name').type('Sandeep Lamichhane')
  
  cy.get('#description').type('I am a Cricketing superstar and I love achyut Gaihre as he is my Biggest fan but I want to make him my AC.')
  
  cy.get('#unlimited').select('Yes')

  
  cy.get('#type').select('General')

 
  
  cy.get('.btn-primary').click({ force: true})


  




  
  });