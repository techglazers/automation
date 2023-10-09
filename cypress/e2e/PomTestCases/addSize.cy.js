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
        HomePage.clickLogin();

        NavToSize.menuclick();
        NavToSize.sizeclick();

        cy.get('.col-md-3 > #DataTables_Table_0_length > label > .dt-button').click();


        AddSize.typeSizename('Fat');
        AddSize.typeSymbol('F');
        AddSize.selectStatus('Active');
        AddSize.submitBtn();

        









       
        



    });

   


})