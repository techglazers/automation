// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })


// commands.js

//Login
Cypress.Commands.add('login', () => {
    cy.fixture('credentials.json').then((credentials) => {
      cy.visit('http://kidoclo.mrturingdev.com/');
      cy.get('#email').type(credentials.email);
      cy.get('#password').type(credentials.password);
      cy.get('.btn').click();
      cy.get('.mb-2').should('be.visible');
    });
  });


  //BRAND
  //goto brand
 Cypress.Commands.add('gotobrand', () => {
  cy.get('.nav-item > .bx').click();
  cy.get(':nth-child(5) > .menu-link').click();
  cy.get('h4.fw-bold').should('contain', 'Brand List');
 })

 
 //create a new brand
 Cypress.Commands.add('createbrand', (name, status) => {
  cy.get('#name').type(name).clear().type(name).should(($input) => {
    const inputValue = $input.val();
    expect(inputValue).to.match(/^[A-Za-z]+$/);
  });
  cy.get('#status').select(status).should('exist');
  cy.pause();
  cy.get('.btn-primary').click();
  cy.get('.alert-heading').should('contain', 'Success!');
 })

 //filter brand
 Cypress.Commands.add('filterbrand', (keyword, status) => {
  cy.get('.form-control').then(($input) => {
    if ($input.val()) {
      cy.get('.form-control').clear().type(keyword, { force: true });
    } else {
      cy.get('.form-control').type(keyword, { force: true });
    }
  });
  cy.get('#search_status').select(status, {force: true});
  cy.get(':nth-child(3) > .dt-button').click({force: true});
  cy.get('.clear-filters').should('exist');
 })

 //delete top brand in search
 Cypress.Commands.add('deletebrand', () => {
  cy.get('.delete-record > .bx').eq(0).click();
  cy.get('.btn-danger').click();
  cy.get('.alert-heading').should('contain', 'Success!');
 })

  //edit top brand in search
  Cypress.Commands.add('editbrand', (name, status) => {
    cy.createbrand(name, status);
    cy.get('.alert-heading').should('contain', 'Success!');
   })

//read brand
   Cypress.Commands.add('readbrand', (action, name, status) => {
    cy.get('[href="javascript:;"] > .bx').click();

    if (action === 'edit') {
      cy.get('.d-flex > .btn-primary').click();
      cy.editbrand(name, status);

    } else if (action === 'cancel') {
      cy.pause();
      cy.get('.d-flex > .btn-secondary').click();
      cy.get('.clear-filters').click();
    } else {
      // Handle the case when an invalid action is passed
      cy.log('Invalid action. Please use "edit" or "cancel" as the action parameter.');
    }
  });

 
  //SIZE
  //go to size
  Cypress.Commands.add('gotosize', () => {
    cy.get('.nav-item > .bx').click();
    cy.get(':nth-child(7) > .menu-link').click();
    cy.get('.fw-bold').should('contain', 'Size List');
   })

   //create a new size

Cypress.Commands.add('createsize', (name, symbol, status) => {
  
  cy.get('#name').clear().type(name).should(($input) => {
    const inputValue = $input.val();
    expect(inputValue).to.match(/^[A-Za-z]+$/);
  });
  cy.get('#symbol').clear().type(symbol).should(($input) => {
    const inputValue = $input.val();
    expect(inputValue).to.match(/^[A-Za-z]+$/);
    expect(inputValue.length).to.be.lessThan(4);
  });
  cy.get('#status').select(status).should('exist');
  cy.get('.text-center > .btn-primary').click();
  cy.get('.alert-heading').should('contain', 'Success!');

 })

 //filter size
 Cypress.Commands.add('filtersize', (keyword) => {
  cy.get('#DataTables_Table_0_length > :nth-child(1) > .form-control').type(keyword).should(($input) => {
    const inputValue = $input.val();
    expect(inputValue).to.match(/^[A-Za-z]+$/);
  });
  cy.get(':nth-child(2) > .dt-button').click();
  cy.get('.clear-filters').should('exist');
 })

 //edit size
 Cypress.Commands.add('editsize', (name, symbol, status) => {
  cy.get('.text-nowrap > .me-2').click();
  cy.createsize(name, symbol, status);
  cy.get('.clear-filters').click();
 })

//delete size
Cypress.Commands.add('deletesize', () => {
  cy.get('.delete-record > .bx').click();
  cy.get('.btn-danger').click();
  cy.get('.alert-heading').should('contain', 'Success!');
 })


//INVENTORY
 //go to INVENTORY
 Cypress.Commands.add('gotoinventory', () => {
  cy.get('.nav-item > .bx').click();
  cy.get(':nth-child(9) > .menu-link').click();
  cy.get('.fw-bold').should('contain', 'Inventory');
 })

 //update inventory
 Cypress.Commands.add('updateinventory', (vendor,product,size,color,qty,type) => {
  cy.get('.col-md-3 > #DataTables_Table_0_length > label > .dt-button').click({force: true});
  cy.get('#vendor_id').select(vendor, {force: true});
  cy.get('#select2-product-id-container').click(); // To open the dropdown
 cy.get('.select2-dropdown .select2-results li').contains(product).click(); 
 cy.get('#size_id').select(size);
 cy.get('#color').type(color);
 cy.get('#quantity').type(qty);
 cy.get('#type').select(type);
 cy.pause(); //for color hex
 cy.get('.btn-primary').click({force: true});
 cy.get('.flex-column > span').should('contain', 'Inventory added successfully');
})

//filter invenory
Cypress.Commands.add('filterinventory', (keyword, size) => {
  cy.get('.form-control').type(keyword,{force: true});
  cy.get('#search_size').select(size, {force: true});
  cy.get(':nth-child(3) > .dt-button').click({force: true});
 })

//read inventory
Cypress.Commands.add('readinventory', () => {
  cy.get('.me-2 > .bx').click();
  cy.pause();
  cy.get('.card-body > .col-12 > .btn').click();
 })

 //delete inventory
 
 Cypress.Commands.add('deleteinventory', () => {
  cy.get('.delete-record').click();
  cy.get('.btn-danger').click();
  cy.get('.flex-column > span').should('contain', 'Inventory deleted successfully');
  cy.get('.clear-filters').click();
 })




  //COUPON

  //goto coupon
  Cypress.Commands.add('gotocoupon', () => {
    cy.get('.nav-item > .bx').click();
    cy.get(':nth-child(13) > .menu-link').click();
    cy.get('.fw-bold').should('contain', 'Coupon List');
  })

  //Create Coupon
  Cypress.Commands.add('createcoupon', (name, code, discount, action, minm, limit, status, sort) => {
    cy.get('.col-md-3 > #DataTables_Table_0_length > label > .dt-button').click({force: true});
    cy.get('#name').type(name, { force: true });
    cy.get('#code').type(code, { force: true });
    cy.get('#discount').clear({ force: true }).type(discount);
    
    if (action === 'Flat') {
      
      //No action

    } else if (action === 'Percentage') {
      
      cy.get('#discount_type').select('Percentage');
      cy.get('#limit').clear().type(limit);
    } else {
      // Handle the case when an invalid action is passed
      cy.log('Invalid action. Please use given as the action parameter.');
    }
    cy.get('#min_purchase').clear().type(minm);
    cy.get('#status').select(status);
    cy.get('#order_by').type(sort);
    cy.pause();   //for inserting pics manually
    cy.get('.btn-primary').click();
    cy.get('.flex-column > span') .should('be.visible')          // Check if the element is visible
    .should('contain', 'Coupon created successfully');  // Check if it contains the specified text
   })

   //filter coupon
 Cypress.Commands.add('filtercoupon', (keyword, status) => {
  cy.get('.form-control').type(keyword, {force: true});
  cy.get('#search_status').select(status, {force: true});
  cy.get(':nth-child(3) > .dt-button').click({force: true});
 })

//edit coupon
Cypress.Commands.add('editcoupon', (name, code, discount, action, limit, minm, status, sort) => {
  cy.get('#name').clear({ force: true }).type(name);
  cy.get('#code').clear({ force: true }).type(code);
  cy.get('#discount').clear({ force: true }).type(discount);
  
  if (action === 'Flat') {
    
    //No action

  } else if (action === 'Percentage') {
    
    cy.get('#discount_type').select('Percentage');
    cy.get('#limit').clear().type(limit);
  } else {
    // Handle the case when an invalid action is passed
    cy.log('Invalid action. Please use given as the action parameter.');
  }
  cy.get('#min_purchase').clear().type(minm);
    cy.get('#status').select(status);
    cy.get(':nth-child(8) > #status').clear().type(sort);
    cy.pause();   //for inserting pics manually
    cy.get('.btn-primary').click();
    cy.get('.flex-column > span')  //ASSERTION
        .should('be.visible')          // Check if the element is visible
        .should('contain', 'Coupon updated successfully');  // Check if it contains the specified text
 })


 //read coupon
 Cypress.Commands.add('readcoupon', (eoc, name, code, discount, action, limit, minm, status, sort) => {
  cy.get('[href="javascript:;"] > .bx').click();

  if (eoc === 'edit') {
    cy.get('.d-flex > .btn-primary').click();
   cy.editcoupon(name, code, discount, action, limit, minm, status, sort);

  } else if (eoc === 'cancel') {
    cy.pause();
    cy.get('.d-flex > .btn-secondary').click();
    cy.get('.clear-filters').click();
    
  } else {
    // Handle the case when an invalid action is passed
    cy.log('Invalid action. Please use "edit" or "cancel" as the action parameter.');
  }
})


//delete coupon
Cypress.Commands.add('deletecoupon', () => {
  cy.get(':nth-child(1) > :nth-child(8) > .text-nowrap > .delete-record > .bx').eq(0).click();
  cy.get('.btn-danger').click();
  cy.get('.alert-heading').should('contain', 'Success!');
 })


//ORDERS
 //goto Orders
 Cypress.Commands.add('gotoorders', () => {
  cy.get('.nav-item > .bx').click();
  cy.get(':nth-child(10) > .menu-link').click();
  cy.get('.fw-bold').should('contain', 'Orders List');
})



//BANNERS
//goto banners
Cypress.Commands.add('gotobanner', () => {
  cy.get('.nav-item > .bx').click();
  cy.get('.menu-inner > :nth-child(4) > .menu-link').click();
  cy.get('.fw-bold').should('contain', 'Banner List');
})

//Create new banner
Cypress.Commands.add('createbanner', (name, status, sortby) => {
  cy.get('.col-md-3 > #DataTables_Table_0_length > label > .dt-button').click({force: true});
  cy.get('#name').type(name);
  cy.get(':nth-child(2) > #status').select(status);
  cy.get(':nth-child(3) > #status').clear().type(sortby);
cy.pause();
  cy.get('.btn-primary').click();
  cy.get('.flex-column > span').should('contain', 'Banner created successfully');
})

//filter banner
Cypress.Commands.add('filterbanner', (keyword, status) => {
  cy.get('.form-control').type(keyword, {force: true});
  cy.get('#search_status').select(status, {force: true});
  cy.get(':nth-child(3) > .dt-button').click({force: true});
 })

 //delete banner
 Cypress.Commands.add('deletebanner', () => {
  cy.get('.delete-record > .bx').eq(0).click();
  cy.get('.btn-danger').click();
  cy.get('.flex-column > span').should('contain', 'Banner deleted successfully');
 })

 //edit banner
 Cypress.Commands.add('editbanner', (name, status, sortby) => {
  
  cy.get('#name').clear().type(name);
  cy.get(':nth-child(2) > #status').select(status);
  cy.get(':nth-child(3) > #status').clear().type(sortby);
cy.pause();
  cy.get('.btn-primary').click();
  cy.get('.flex-column > span').should('contain', 'Banner updated successfully');

 })

 //read banner
 Cypress.Commands.add('readbanner', (action, name, status, sortby) => {
  cy.get('[href="javascript:;"] > .bx').eq(0).click();
  if (action === 'edit') {
    cy.get('.d-flex > .btn-primary').click();
   cy.editbanner(name, status, sortby);

  } else if (action === 'close') {
    cy.pause();
    cy.get('.d-flex > .btn-secondary').eq(0).click();
    
   
  } else {
    // Handle the case when an invalid action is passed
    cy.log('Invalid action. Please use "edit" or "cancel" as the action parameter.');
  }

 })


 //CAMPAIGN
  //goto CAMPAIGN
  Cypress.Commands.add('gotocampaign', () => {
    cy.get('.nav-item > .bx').click();
    cy.get(':nth-child(11) > .menu-link').click();
    cy.get('.fw-bold').should('contain', 'Campaign List');
   })

   //CREATE CAMPAIGN
   Cypress.Commands.add('createcampaign', (name, description, unlimited, type, status) =>{
    cy.get('.col-md-3 > #DataTables_Table_0_length > label > .dt-button').click();
    cy.get('#name').type(name);
    cy.get('#description').type(description);
    cy.get('#unlimited').select(unlimited);
    cy.get('#type').select(type);
    cy.get('#status').select(status);
    cy.pause(); //for entering image if needed
    cy.get('.btn-primary').click();
   })

   //FILTER CAMPAIGN
Cypress.Commands.add('filtercampaign', (keyword, status) => {
  cy.get('.form-control').type(keyword);
  cy.get('#search_status').select(status);
  cy.get(':nth-child(3) > .dt-button').click();
 })

 //ADD PRODUCTS TO CAMPAIGN
 Cypress.Commands.add('addproducttocamp', (category, brand, vendor, product) => {
  cy.get('[href*="admin/campaign/add-product"] > .bx').eq(0).click();
  cy.get('#category_id_0').select(category);
  cy.get('#brand_id_0').select(brand);
  cy.get('#vendor_id_0').select(vendor);
  cy.get('#search').type(product);
  cy.get('.text-center > .btn').click();
  cy.get('.search-product-block .items .text-nowrap .btn').click();

 })

 //REMOVE PRODUCTS FROM CAMPAIGN
 Cypress.Commands.add('removeproductfromcamp', () => {
  cy.get('[href*="admin/campaign/add-product"] > .bx').eq(0).click(); 
  cy.get('.btn > .bx').eq(0).click();

 })

 //EDIT CAMPAIGN
 Cypress.Commands.add('editcampaign', (name, description, unlimited, type, status) => {
  cy.get('.configure-record > .bx').eq(0).click();
  cy.get('#name').clear().type(name);
    cy.get('#description').clear().type(description);
    cy.get('#unlimited').select(unlimited);
    cy.get('#type').select(type);
    cy.get('#status').select(status);
    cy.pause(); //for entering image if needed
    cy.get('.btn-primary').click();

 })

 //DELETE CAMPAIGN
 Cypress.Commands.add('deletecampaign', () => {
  cy.get('.delete-record > .bx').click();
  cy.get('.btn-danger').click();
 })


//CATEGORY
  //goto Category
  Cypress.Commands.add('gotocategory', () => {
    cy.get('.nav-item > .bx').click();
    cy.get(':nth-child(6) > .menu-link').click();
    cy.get('.fw-bold').should('contain', 'Category List');
   })

   //create Category
   Cypress.Commands.add('createcategory', (parent, name, status) =>{
    cy.get('.col-md-3 > #DataTables_Table_0_length > label > .dt-button').click();
    cy.get('#parent_id').select(parent);
    cy.get('#name').type(name);
    cy.get('#status').select(status);
    cy.pause();
    cy.get('.btn-primary').click();
    cy.get('.alert-heading').should('contain', 'Success!');
   })

   //filter Category
   Cypress.Commands.add('filtercategory', (keyword, parent, status) => {
    cy.get('.form-control').type(keyword);
    cy.get('#search_parent_id').select(parent);
    cy.get('#search_status').select(status);
    cy.get(':nth-child(4) > .dt-button').click();
   })

   //edit Category
   Cypress.Commands.add('editcategory', (parent, name, status) => {
    
    cy.get('#parent_id').select(parent);
    cy.get('#name').clear().type(name);
    cy.get('#status').select(status);
    cy.pause();
    cy.get('.btn-primary').click();
    cy.get('.alert-heading').should('contain', 'Success!');
   })

   //READ CATEGORY
   Cypress.Commands.add('readcategory', (action, parent, name, status) => {
    cy.get('[href="javascript:;"] > .bx').eq(0).click();
    if (action === 'edit') {
      cy.get('.d-flex > .btn-primary').click();
     cy.editcategory(parent, name, status);
  
    } else if (action === 'close') {
      cy.pause();
      cy.get('.d-flex > .btn-secondary').eq(0).click();
      
     
    } else {
      // Handle the case when an invalid action is passed
      cy.log('Invalid action. Please use "edit" or "close" as the action parameter.');
    }
  
   })

   //DELETE CATEGORY
   //DELETE CAMPAIGN
 Cypress.Commands.add('deletecategory', () => {
  cy.get('.delete-record > .bx').eq(0).click();
  cy.get('.btn-danger').click();
  cy.get('.alert-heading').should('contain','Success!');
 })
