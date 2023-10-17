class CouponPage{

    elements = {
        couponclick: () => cy.get(':nth-child(13) > .menu-link'),
        addnewCoup: () => cy.get('.col-md-3 > #DataTables_Table_0_length > label > .dt-button'),
        coupnameInput: () => cy.get('#name'),
        codenameInput: () => cy.get('#code'),
        discount: () => cy.get('#discount'),
        discounttype: () => cy.get('#discount_type'),
        minmpurchase: () => cy.get('#min_purchase'),
        status: () => cy.get('#status'),
        sortby: () => cy.get('#order_by'),
        limit: () => cy.get('#limit'),
        submit: () => cy.get('.btn-primary')
       

        
        
    }

    couponclick(){
        this.elements.couponclick().click();
    }

    addnewCoup(){
        this.elements.addnewCoup().click({ force: true});
    }

    coupnameInput(coupname){
        this.elements.coupnameInput().type(coupname, {force: true});

    }

    codenameInput(codename){
        this.elements.codenameInput().type(codename, {force: true});
        
    }

    
   discount(dis){
        this.elements.discount().clear({force: true}).type(dis);
        
    }

    discounttype(distype){
        this.elements.discounttype().select(distype);
        
    }

    minmpurchase(mpc){
        this.elements.minmpurchase().clear().type(mpc);
    }

    

    limit(lim){
        this.elements.limit().clear().type(lim);
    }

    status(status){
        this.elements.status().select(status);
    }

    sortby(sort){
        this.elements.sortby().clear().type(sort);
    }

    SubmitBtn(){
        this.elements.submit().click();
        
    }

    


    
    

}

module.exports = new CouponPage();