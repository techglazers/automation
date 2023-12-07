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

   //Delete Top Item
 Cypress.Commands.add('delete', () => {
  cy.get('.delete-record > .bx').eq(0).click();
  cy.get('.btn-danger').click();
  cy.get('.alert-heading').should('contain', 'Success!');
 })

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

  


 //USER MANAGEMENT

    //1.ADMIN LIST
     
    //GOTO ADMIN
  Cypress.Commands.add('gotoadmin', () => {
    cy.get('.nav-item > .bx').click();
    cy.get(':nth-child(2) > .menu-toggle').click();
    cy.get('.open > .menu-sub > :nth-child(1) > .menu-link').click();
    cy.get('.fw-bold').should('contain', 'Admin List');
   })

   //CREATE ADMIN
   Cypress.Commands.add('createadmin', (fname, lname, email, pw, cpw, phone, role, status) =>{
    cy.get('.col-md-3 > #DataTables_Table_0_length > label > .dt-button').click();
    cy.get('#first_name').type(fname);
    cy.get('#last_name').type(lname);
    cy.get('#email')
  .type(email)
  .should('have.value', email)
  .invoke('val') // Get the value of the input field
  .should('include', '@') // Assert that it includes '@'
  .should('include', '.'); // Assert that it includes '.'
    cy.get('#password').type(pw);
    cy.get('#password').invoke('val').then(pw => {
      expect(pw).to.have.length.at.least(8);
      expect(pw).to.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/);
    });
    cy.get('#password_confirmation').type(cpw).should('have.value', pw);;
    cy.get('#phone').type(phone).invoke('val').then(phone => {
      expect(phone).to.have.length.at.least(10);
    });
    cy.get('#role_id').select(role).should('exist');
    cy.get('#status').select(status).should('exist');
    cy.pause();
    cy.get('.btn-primary').click();
    cy.get('.alert-heading').should('contain', 'Success!');
   })

   //FILTER ADMIN

Cypress.Commands.add('filteradmin', (keyword, role, status) => {
    cy.get('.form-control').type(keyword);
    cy.get('#search_role').select(role);
    cy.get('#search_status').select(status);
    cy.get(':nth-child(4) > .dt-button').click();
   })

   //EDIT ADMIN
   Cypress.Commands.add('editadmin', (fname, lname, pw, cpw, phn, role, status) => {
    cy.get(':nth-child(1) > .form-control').clear().type(fname);
    cy.get(':nth-child(2) > .form-control').clear().type(lname);
    cy.get('#password').type(pw);
    cy.get('#password').invoke('val').then(pw => {
      expect(pw).to.have.length.at.least(8);
      expect(pw).to.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/);
    });
    cy.get('#password_confirmation').type(cpw).should('have.value', pw);
    cy.get(':nth-child(6) > .form-control').clear().type(phn).invoke('val').then(phn => {
      expect(phn).to.have.length.at.least(10);
    });;
    cy.get('#role_id').select(role).should('exist');
    cy.get('#status').select(status).should('exist');
    cy.pause();
    cy.get('.btn-primary').click();
    cy.get('.alert-heading').should('contain', 'Success!');

   })

   //READ ADMIN
   Cypress.Commands.add('readadmin', (action, fname, lname, pw, cpw, phn, role, status) => {
    cy.get('[href="javascript:;"] > .bx').eq(0).click();
    if (action === 'edit') {
      cy.get('.d-flex > .btn-primary').click();
     cy.editadmin(fname, lname, pw, cpw, phn, role, status);
  
    } else if (action === 'close') {
      cy.pause();
      cy.get('.d-flex > .btn-secondary').eq(0).click();
      
     
    } else {
      // Handle the case when an invalid action is passed
      cy.log('Invalid action. Please use "edit" or "close" as the action parameter.');
    }
  
   })

   //2. CUSTOMER
   //GOTO CUSTOMER
   Cypress.Commands.add('gotocustomer', () => {
    cy.get('.nav-item > .bx').click();
    cy.get(':nth-child(2) > .menu-toggle').click();
    cy.get('.open > .menu-sub > :nth-child(2) > .menu-link').click();
    cy.get('.fw-bold').should('contain', 'Customer List');
   })

   //FILTER CUSTOMER
   Cypress.Commands.add('filtercustomer', (keyword, status) => {
    cy.get('.form-control').type(keyword);
    cy.get('#search_status').select(status);
    cy.get(':nth-child(3) > .dt-button').click();
   })

   //CREATE CUSTOMER
   Cypress.Commands.add('createcustomer', (fname, lname, email, pw, cpw, phone, status) =>{
    cy.get('.col-md-3 > #DataTables_Table_0_length > label > .dt-button').click();
    cy.get('#first_name').type(fname);
    cy.get('#last_name').type(lname);
    cy.get('#email')
  .type(email)
  .should('have.value', email)
  .invoke('val') // Get the value of the input field
  .should('include', '@') // Assert that it includes '@'
  .should('include', '.'); // Assert that it includes '.'
    cy.get('#password').type(pw);
    cy.get('#password').invoke('val').then(pw => {
      expect(pw).to.have.length.at.least(8);
      expect(pw).to.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/);
    });
    cy.get('#password_confirmation').type(cpw).should('have.value', pw);;
    cy.get('#phone').type(phone).invoke('val').then(phone => {
      expect(phone).to.have.length.at.least(10);
    });
    cy.get('#status').select(status).should('exist');
    cy.pause();
    cy.get('.btn-primary').click();
    cy.get('.alert-heading').should('contain', 'Success!');
   })

   //EDIT CUSTOMER
   Cypress.Commands.add('editcustomer', (fname, lname, pw, cpw, phn, status) => {
    cy.get(':nth-child(1) > .form-control').clear().type(fname);
    cy.get(':nth-child(2) > .form-control').clear().type(lname);
    cy.get('#password').type(pw);
    cy.get('#password').invoke('val').then(pw => {
      expect(pw).to.have.length.at.least(8);
      expect(pw).to.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/);
    });
    cy.get('#password_confirmation').type(cpw).should('have.value', pw);
    cy.get(':nth-child(6) > .form-control').clear().type(phn).invoke('val').then(phn => {
      expect(phn).to.have.length.at.least(10);
    });;
    cy.get('#status').select(status).should('exist');
    cy.pause();
    cy.get('.btn-primary').click();
    cy.get('.alert-heading').should('contain', 'Success!');

   })

   //READ CUSTOMER
   Cypress.Commands.add('readcustomer', (action, fname, lname, pw, cpw, phn, status) => {
    cy.get('[href="javascript:;"] > .bx').eq(0).click();
    if (action === 'edit') {
      cy.get('.d-flex > .btn-primary').click();
     cy.editcustomer(fname, lname, pw, cpw, phn, status);
  
    } else if (action === 'close') {
      cy.pause();
      cy.get('.d-flex > .btn-secondary').eq(0).click();
      
     
    } else {
      // Handle the case when an invalid action is passed
      cy.log('Invalid action. Please use "edit" or "close" as the action parameter.');
    }
  
   })

   //3.ROLE

   //GOTO ROLES
   Cypress.Commands.add('gotoroles', () => {
    cy.get('.nav-item > .bx').click();
    cy.get(':nth-child(2) > .menu-toggle').click();
    cy.get('.menu-sub > :nth-child(3) > .menu-link').click();
    cy.get('.fw-bold').should('contain', 'Roles List');
   })

   //CREATE ROLE
   Cypress.Commands.add('createrole', (name, status) => {
    cy.get('.col-md-3 > #DataTables_Table_0_length > label > .dt-button').click();
    cy.get('#name').type(name);
    cy.get('#status').select(status).should('exist');
    cy.pause();
    cy.get('.text-center > .btn-primary').click();
   })

   //FILTER ROLE
   Cypress.Commands.add('filterrole', (keyword) => {
    cy.get('#DataTables_Table_0_length > :nth-child(1) > .form-control').type(keyword);
    cy.get(':nth-child(2) > .dt-button').click();
   })

   //EDIT ROLE
   Cypress.Commands.add('editrole', (name, status) => {
    cy.get('.edit-record > .bx').click();
    cy.get('#name').clear().type(name);
    cy.get('#status').select(status).should('exist');
    cy.pause();
    cy.get('.text-center > .btn-primary').click();
   })

   //SELECT FUNCTION OF ROLES
   Cypress.Commands.add('selectfunction', () => {
    cy.get('.fa-solid').click();
    cy.pause();
    cy.get('.btn-primary').click();
    cy.get('.alert-heading').should('contain', 'Success!');
   })


   //VENDOR

   //1.VENDOR

   //GOTO VENDOR
   Cypress.Commands.add('gotovendor', () => {
    cy.get('.nav-item > .bx').click();
    cy.get(':nth-child(3) > .menu-toggle').click();
    cy.get('.open > .menu-sub > :nth-child(1) > .menu-link').click();
    cy.get('h4.fw-bold').should('contain', 'Vendors');
   })

   //CREATE VENDOR
   Cypress.Commands.add('createvendor', (name, owner, email, phn, country, state, city, address, status) => {
    cy.get('.col-md-3 > #DataTables_Table_0_length > label > .dt-button').click();
    cy.get('#name').type(name);
    cy.get('#owner').type(owner);
    cy.get('#email').type(email)
    .should('have.value', email)
    .invoke('val') // Get the value of the input field
    .should('include', '@') // Assert that it includes '@'
    .should('include', '.'); // Assert that it includes '.';
    cy.get('#phone').type(phn).invoke('val').then(phn => {
      expect(phn).to.have.length.at.least(10);
    });;
    cy.get('#address_country').select(country).should('exist');
    cy.get('#address_provience_state').select(state).should('exist');
    cy.get('#address_city').type(city);
    cy.get('#address_line_1').type(address);
    cy.get('#status').select(status).should('exist');
    cy.pause();
    cy.get('.btn-primary').click();
    cy.get('.alert > .flex-column > span').should('contain','Vendor created successfully');

   })

   //FILTER VENDOR
   Cypress.Commands.add('filtervendor', (keyword, status) => {
    cy.get('.form-control').type(keyword);
    cy.get('#search_status').select(status).should('exist');
    cy.get(':nth-child(3) > .dt-button').click();
   })

   //EDIT VENDOR
   Cypress.Commands.add('editvendor', (name, owner, email, phn, country, state, city, address, status) => {
    cy.get('#name').clear().type(name);
    cy.get('#owner').clear().type(owner);
    cy.get('#email').clear().type(email)
    .should('have.value', email)
    .invoke('val') // Get the value of the input field
    .should('include', '@') // Assert that it includes '@'
    .should('include', '.'); // Assert that it includes '.';
    cy.get('#phone').clear().type(phn).invoke('val').then(phn => {
      expect(phn).to.have.length.at.least(10);
    });;
    cy.get('#address_country').select(country).should('exist');
    cy.get('#address_provience_state').select(state).should('exist');
    cy.get('#address_city').clear().type(city);
    cy.get('#address_line_1').clear().type(address);
    cy.get('#status').select(status).should('exist');
    cy.pause();
    cy.get('.btn-primary').click();
    cy.get('.alert > .flex-column > span').should('contain','Vendor updated successfully');
   })

   //Read Vendor
   Cypress.Commands.add('readvendor', (action, name, owner, email, phn, country, state, city, address, status) => {
    cy.get('[href="javascript:;"] > .bx').eq(0).click();
    if (action === 'edit') {
      cy.get('.d-flex > .btn-primary').click();
      cy.editvendor(name, owner, email, phn, country, state, city, address, status);
  
    } else if (action === 'close') {
      cy.pause();
      cy.get('.d-flex > .btn-secondary').eq(0).click();
      
     
    } else {
      // Handle the case when an invalid action is passed
      cy.log('Invalid action. Please use "edit" or "close" as the action parameter.');
    }
  
   })

   //2.VENDOR USER

   //goto vendor user
   Cypress.Commands.add('gotovendoruser', () => {
    cy.get('.nav-item > .bx').click();
    cy.get(':nth-child(3) > .menu-toggle').click();
    cy.get('.open > .menu-sub > :nth-child(2) > .menu-link').click();
    cy.get('h4.fw-bold').should('contain', 'Vendor Users');
   })

   //create vendor user
   Cypress.Commands.add('createvendoruser', (vendor, fname, lname, email, pw, cpw, phone, status) => {
    cy.get('.col-md-3 > #DataTables_Table_0_length > label > .dt-button').click();
    cy.get('#vendor_id').select(vendor).should('exist');
    cy.get(':nth-child(2) > .form-control').type(fname);
    cy.get(':nth-child(3) > .form-control').type(lname);
    cy.get(':nth-child(4) > .form-control')
  .type(email)
  .should('have.value', email)
  .invoke('val') // Get the value of the input field
  .should('include', '@') // Assert that it includes '@'
  .should('include', '.'); // Assert that it includes '.'
    cy.get('#password').type(pw);
    cy.get('#password').invoke('val').then(pw => {
      expect(pw).to.have.length.at.least(8);
      expect(pw).to.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/);
    });
    cy.get('#password_confirmation').type(cpw).should('have.value', pw);;
    cy.get(':nth-child(7) > .form-control').type(phone).invoke('val').then(phone => {
      expect(phone).to.have.length.at.least(10);
    });
    cy.get('#status').select(status).should('exist');
    cy.pause();
    cy.get('.btn-primary').click();
    cy.get('.alert-heading').should('contain', 'Success!');
   })

   //Filter Vendor User
   Cypress.Commands.add('filtervendoruser', (keyword, status) => {
    cy.get('.form-control').type(keyword);
    cy.get('#search_status').select(status).should('exist');
    cy.get(':nth-child(3) > .dt-button').click();
   })

   //EDIT VENDOR USER
   Cypress.Commands.add('editvendoruser', (vendor, fname, lname, pw, cpw, phone, status) => {
    cy.get('#vendor_id').select(vendor).should('exist');
    cy.get(':nth-child(2) > .form-control').clear().type(fname);
    cy.get(':nth-child(3) > .form-control').clear().type(lname);
    cy.get('#password').type(pw);
    cy.get('#password').invoke('val').then(pw => {
      expect(pw).to.have.length.at.least(8);
      expect(pw).to.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/);
    });
    cy.get('#password_confirmation').type(cpw).should('have.value', pw);;
    cy.get(':nth-child(7) > .form-control').clear().type(phone).invoke('val').then(phone => {
      expect(phone).to.have.length.at.least(10);
    });
    cy.get('#status').select(status).should('exist');
    cy.pause();
    cy.get('.btn-primary').click();
    cy.get('.alert-heading').should('contain', 'Success!');
   })

   //read vendor user
   Cypress.Commands.add('readvendoruser', (action, vendor, fname, lname, pw, cpw, phone, status) => {
    cy.get('[href="javascript:;"] > .bx').eq(0).click();
    if (action === 'edit') {
      cy.get('.d-flex > .btn-primary').click();
      
  
    } else if (action === 'close') {
      cy.pause();
      cy.get('.d-flex > .btn-secondary').eq(0).click();
      
     
    } else {
      // Handle the case when an invalid action is passed
      cy.log('Invalid action. Please use "edit" or "close" as the action parameter.');
    }
  
   })

   //SUBSCRIPTIONS
   //goto subscription
   Cypress.Commands.add('gotosubscription', () => {
    cy.get('.nav-item > .bx').click();
    cy.get(':nth-child(12) > .menu-link').click();
    cy.get('.fw-bold').should('contain', 'Subscription List');
   })

   //create subscription
   Cypress.Commands.add('createsubscription', (name, description, type, duration, price, reward, carryover, status) => {
    cy.get('.col-md-3 > #DataTables_Table_0_length > label > .dt-button').click();
    cy.get('#name').type(name);
    cy.get('#description').type(description);
    if (type === 'Monthly') {
      cy.get('#type').select(type).should('exist');
      if (duration === '1 Month') {
        cy.get('.duration-list > :nth-child(1) > input').click();
        
    
      } else if (duration === '2 Month') {
        cy.get(':nth-child(3) > input').click();
        
       
      }else if (duration === '3 Month') {
        cy.get(':nth-child(5) > input').click();
        
       
      }else {
        // Handle the case when an invalid action is passed
        cy.log('Invalid action.');
      }
  
    } else if (type === 'Quarterly') {
      cy.get('#type').select(type).should('exist');
      if (duration === '3 Month') {
        cy.get('.duration-list > :nth-child(1) > input').click();
        
    
      } else if (duration === '6 Month') {
        cy.get(':nth-child(3) > input').click();
        
       
      }else if (duration === '9 Month') {
        cy.get(':nth-child(5) > input').click();
        
       
      }else {
        // Handle the case when an invalid action is passed
        cy.log('Invalid action.');
      }
     
    } else {
      // Handle the case when an invalid action is passed
      cy.log('Invalid action.');
    }
    cy.get('#price').clear().type(price);
    cy.get('#reward_point').clear().type(reward);
    cy.get('#carry_over_ratio').clear().type(carryover);
    cy.get('#status').select(status).should('exist');
    cy.pause();
    cy.get('.btn-primary').click();
    cy.get('.flex-column > span').should('contain', 'Subscription created successfully');
   })


   //FILTER SUBSCRIPTION
   Cypress.Commands.add('filtersubscription', (keyword, type, status) => {
    cy.get('.form-control').type(keyword);
    cy.get('#search_type').select(type).should('exist');
    cy.get('#search_status').select(status).should('exist');
    cy.get(':nth-child(4) > .dt-button').click();
   })

   //EDIT SUBSCRIPTION
   Cypress.Commands.add('editsubscription', (name, description, type, duration, price, reward, carryover, status) => {
    cy.get('.me-2 > .bx').click();
    cy.get('#name').clear().type(name);
    cy.get('#description').clear().type(description);
    if (type === 'Monthly') {
      cy.get('#type').select(type).should('exist');
      if (duration === '1 Month') {
        cy.get('.duration-list > :nth-child(1) > input').click();
        
    
      } else if (duration === '2 Month') {
        cy.get(':nth-child(3) > input').click();
        
       
      }else if (duration === '3 Month') {
        cy.get(':nth-child(5) > input').click();
        
       
      }else {
        // Handle the case when an invalid action is passed
        cy.log('Invalid action.');
      }
  
    } else if (type === 'Quarterly') {
      cy.get('#type').select(type).should('exist');
      if (duration === '3 Month') {
        cy.get('.duration-list > :nth-child(1) > input').click();
        
    
      } else if (duration === '6 Month') {
        cy.get(':nth-child(3) > input').click();
        
       
      }else if (duration === '9 Month') {
        cy.get(':nth-child(5) > input').click();
        
       
      }else {
        // Handle the case when an invalid action is passed
        cy.log('Invalid action.');
      }
     
    } else {
      // Handle the case when an invalid action is passed
      cy.log('Invalid action.');
    }
    cy.get('#price').clear().type(price);
    cy.get('#reward_point').clear().type(reward);
    cy.get('#carry_over_ratio').clear().type(carryover);
    cy.get('#status').select(status).should('exist');
    cy.pause();
    cy.get('.btn-primary').click();
    cy.get('.flex-column > span').should('contain', 'Subscription updated successfully');
   })


   //CMS
   //GOTO CMS
   Cypress.Commands.add('gotocms', () => {
    cy.get('.nav-item > .bx').click();
    cy.get(':nth-child(14) > .menu-link').click();
    cy.get('.fw-bold').should('contain', 'CMS List');
   })

   //CREATE CMS
   Cypress.Commands.add('createcms', (title, subtitle, description, type, status, sort) => {
    cy.get('.col-md-3 > #DataTables_Table_0_length > label > .dt-button').click();
    cy.get(':nth-child(1) > #status').type(title);
    cy.get(':nth-child(2) > #status').type(subtitle);
    cy.get(':nth-child(3) > #status').type(description);
    cy.get('#type').select(type).should('exist');
    cy.get(':nth-child(5) > #status').select(status).should('exist');
    cy.get(':nth-child(6) > #status').type(sort);
    cy.pause();
    cy.get('.btn-primary').click();
    cy.get('.flex-column > span').should('contain', 'Cms created successfully');
   })

   //Filter Cms
   Cypress.Commands.add('filtercms', (keyword, status) => {
    cy.get('.form-control').type(keyword);
    cy.get('#search_status').select(status).should('exist');
    cy.get(':nth-child(3) > .dt-button').click();
   })

   //edit cms
   Cypress.Commands.add('editcms', (title, subtitle, description, type, status, sort) => {
    cy.get(':nth-child(1) > #status').clear().type(title);
    cy.get(':nth-child(2) > #status').clear().type(subtitle);
    cy.get(':nth-child(3) > #status').clear().type(description);
    cy.get('#type').select(type).should('exist');
    cy.get(':nth-child(5) > #status').select(status).should('exist');
    cy.get(':nth-child(6) > #status').clear().type(sort);
    cy.pause();
    cy.get('.btn-primary').click();
    cy.get('.flex-column > span').should('contain', 'Cms updated successfully');
   })

   //read CMS
   Cypress.Commands.add('readcms', (action, title, subtitle, description, type, status, sort) => {
    cy.get('[href="javascript:;"] > .bx').eq(0).click();
    if (action === 'edit') {
      cy.get('.d-flex > .btn-primary').click();
      cy.editcms(title, subtitle, description, type, status, sort);
  
    } else if (action === 'close') {
      cy.pause();
      cy.get('.d-flex > .btn-secondary').eq(0).click();
      
     
    } else {
      // Handle the case when an invalid action is passed
      cy.log('Invalid action. Please use "edit" or "close" as the action parameter.');
    }
  
   })