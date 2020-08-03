var productionPage = require('../pages/productionPage.js');

describe('Quantite de Production ACP28 and ACP54 Page', function() {
    'use strict';

    it('When: User accesses the web app, they should land on the production page', function () {
        productionPage.validateProductionPage();
    });

    it('When: User is on production page the title for the app bar should validate as PAP', function () {
        productionPage.validatePageBarTitle();
    });

    it('When: User accesses the web app, they should see the level one KPIs with the button to see more ', function () {
        productionPage.validateKPIsDisplayed();
    });

    it('When: User accesses the web app, and clicks on more kpis, the button should change to less kpis and more kpis should be visible ', function () {
        productionPage.clickMoreKPIsAndValidate();
    });

    it('When: User accesses the web app, and clicks on less kpis, the button should change to more kpis and less kpis should be visible ', function () {
            productionPage.clickLessKPIsAndValidate();
    });

    it('When: User clicks on the quantite de production acp 28, the user should go to the level 2 KPIs for ACP 28 and see the data ', function () {
        productionPage.clickProduction28KPI();
    });

    it('When: User clicks on the quantite de production acp 28 level 2, the user should go to the level 3 KPIs for ACP 28 and see the data ', function () {
        productionPage.clickProduction28KPILevel2();
        productionPage.goBackToProductionPageFromLevel3();
    });

    it('When: User clicks on the quantite de production acp 54, the page should move to the next page and change the title ', function () {
        productionPage.clickProduction54KPI();
    });

    it('When: User clicks on the Echelon J of level 2 for quantite de production acp 54, the page should move to the next page and change the title ', function () {
        productionPage.clickProduction54KPIEchelonJ();
    });

    it('When: User clicks on the Echelon K of level 2 for quantite de production acp 54, the page should move to the next page and change the title ', function () {
        productionPage.clickProduction54KPIEchelonK();
    });

    it('When: User clicks on the Echelon L of level 2 for quantite de production acp 54, the page should move to the next page and change the title ', function () {
        productionPage.clickProduction54KPIEchelonL();
        productionPage.goBackToProductionPageFromLevel3();
    });


    it('Then: User wants to navigate to the production page', function () {
        productionPage.goToProductionPage();
    });


});