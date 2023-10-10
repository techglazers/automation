import HomePage from "../PomTestingLocators/HomePage";
import AddSize from "../PomTestingLocators/AddSize";
import NavToSize from "../PomTestingLocators/NavToSize";


describe('Create Size', () => {

    it('should create new size', () => {

        cy.login();  
        cy.screenshot('1.Login Status');



        NavToSize.menuclick();    //click on menu bar
        NavToSize.sizeclick();    //click on size

        AddSize.clickAddSize();  //click on add size
        AddSize.typeSizename('Fat');
        AddSize.typeSymbol('F');
        AddSize.selectStatus('Active');
        cy.screenshot('2.SizeAdd Screenshot');  //size add screenshot
        AddSize.submitBtn();

        NavToSize.typesize('Fat');    //search using keyword
        NavToSize.clickfilter();     //click on filter
        cy.screenshot('3.Filtered Results Screenshot');  //filtered screeenshot
       

        NavToSize.editSize();   //edit size
        AddSize.typeSizename('{selectall}{backspace}Very Large');   
        AddSize.typeSymbol('{selectall}{backspace}F');
        AddSize.selectStatus('Active');
        cy.screenshot('4.Edit Screenshot');  //edit screenshot
        AddSize.submitBtn();

        NavToSize.typesize('Very Large');    //search using keyword for updated size
        NavToSize.clickfilter(); 
        cy.screenshot('5.Before Deletion Screenshot'); 

        NavToSize.deletesize();        //click on delete icon
        NavToSize.confirmBtn();    
        cy.screenshot('6.After Deletion Screenshot');  







    });

   


})