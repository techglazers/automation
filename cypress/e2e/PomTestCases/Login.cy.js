import HomePage from "../PomTestingLocators/HomePage";


describe('Admin Dashboard Login', () => {


    beforeEach(() => {

        cy.visit('http://kidoclo.mrturingdev.com//')
    });

    it('should login to home page', () => {

        HomePage.typeUsername('rabikthapa00@gmail.com');
        HomePage.typePassword('P@ssw0rd5789');
        HomePage.clickLogin();

        cy.screenshot('Login ScreenShot');

        



    });

   


})