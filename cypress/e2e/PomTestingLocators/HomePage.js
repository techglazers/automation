class homePage{

    elements = {
        usernameInput: () => cy.get('#email'),
        passwordInput: () => cy.get('#password'),
        loginBtn: () => cy.get('.btn'),
        errorMessage: () => cy.get('.invalid-feedback')
    }

    typeUsername(username){
        this.elements.usernameInput().type(username);

    }

    typePassword(password){
        this.elements.passwordInput().type(password);
        
    }

    clickLogin(){
        this.elements.loginBtn().click();
    }

}

module.exports = new homePage();