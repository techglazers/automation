class NavigationtoSize{

    elements = {
        menuclick: () => cy.get('.nav-item > .bx'),
        sizeclick: () => cy.get(':nth-child(7) > .menu-link'),

        searchsize: () => cy.get('#DataTables_Table_0_length > :nth-child(1) > .form-control'),
        clickfilter: () => cy.get(':nth-child(2) > .dt-button'),

        editSize: () => cy.get('.col-md-3 > #DataTables_Table_0_length > label > .dt-button'),

        deletesize: () => cy.get('.delete-record > .bx'),
        confirmBtn: () => cy.get('.btn-danger')
        
    } 

    menuclick(){
        this.elements.menuclick().click();
    }

    //click on size on admin dashboard
    sizeclick(){
        this.elements.sizeclick().click();
    }

    //keyword to search
    typesize(size){
        this.elements.searchsize().type(size);
        
    }

    clickfilter(){
        this.elements.clickfilter().click();
    }

    //click on delete icon of top after search
    deletesize(){
        this.elements.deletesize().click();
    }

    confirmBtn(){
        this.elements.confirmBtn().click();
    }

    editSize(){
        this.elements.editSize().click();
    }


}

module.exports = new NavigationtoSize();