class addSize{

    elements = {
        sizenameInput: () => cy.get('#name'),
        symbolInput: () => cy.get('#symbol'),
        selectStatus: () => cy.get('#status'),
        submitBtn: () => cy.get('.text-center > .btn-primary'),
        errorMessage: () => cy.get('.alert')
    }

    typeSizename(sizename){
        this.elements.sizenameInput().type(sizename);

    }

    typeSymbol(symbol){
        this.elements.symbolInput().type(symbol);
        
    }

    selectStatus(status){
        this.elements.selectStatus().select(status);
        
    }

    submitBtn(){
        this.elements.submitBtn().click();
    }

}

module.exports = new addSize();