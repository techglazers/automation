class NavigationtoSize{

    elements = {
        menuclick: () => cy.get('.nav-item > .bx'),
        sizeclick: () => cy.get(':nth-child(7) > .menu-link')
        
    } 

    menuclick(){
        this.elements.menuclick().click();
    }

    sizeclick(){
        this.elements.sizeclick().click();
    }

}

module.exports = new NavigationtoSize();