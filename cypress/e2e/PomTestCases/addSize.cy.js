import HomePage from "../PomTestingLocators/HomePage";
import AddSize from "../PomTestingLocators/AddSize";
import NavToSize from "../PomTestingLocators/NavToSize";


describe('Create Size', () => {


    beforeEach(() => {

        cy.visit('http://kidoclo.mrturingdev.com//')
    });

    it('should create new size', () => {

        HomePage.typeUsername('rabikthapa00@gmail.com');
        HomePage.typePassword('P@ssw0rd5789');
        cy.get('.bx').click();
        cy.screenshot('Before Login Credentials');
        HomePage.clickLogin();
        cy.screenshot('Login Status');



        NavToSize.menuclick();    //click on menu bar
        NavToSize.sizeclick();    //click on size

        AddSize.clickAddSize();  //click on add size
        AddSize.typeSizename('Fat');
        AddSize.typeSymbol('F');
        AddSize.selectStatus('Active');
        cy.screenshot('SizeAdd Screenshot');  //size add screenshot
        AddSize.submitBtn();

        NavToSize.typesize('Fat');    //search using keyword
        NavToSize.clickfilter();     //click on filter
        cy.screenshot('Filtered Results Screenshot');  //filtered screeenshot
       

        NavToSize.editSize();   //edit size
        AddSize.typeSizename('{selectall}{backspace}Very Large');   
        AddSize.typeSymbol('{selectall}{backspace}F');
        AddSize.selectStatus('Active');
        cy.screenshot('Edit Screenshot');  //edit screenshot
        AddSize.submitBtn();

        NavToSize.deletesize();        //click on delete icon
        NavToSize.confirmBtn();    
        cy.screenshot('After Deletion Screenshot');  







    });

   


})