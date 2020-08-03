var consumptionSpecificDeVapeurPage = require('../pages/consumptionSpecificDeVapeurPage.js');

describe('Consumption Specific De Vapeur Page', function() {
    'use strict';

    it('When: User accesses the web app and clicks on the more button, they should be able to click on the consumption specific de vapeur and be on the page', function () {
        consumptionSpecificDeVapeurPage.goToConsumptionSpecificDeVapeurPage();
        consumptionSpecificDeVapeurPage.validateKPIsDisplayed();
    });

    it('When: User is on consumption specific de vapeur page, should have the right title on the app bar', function(){
        consumptionSpecificDeVapeurPage.validatePageBarTitle("Consommation spécifique de vapeur");
    });

    it('When: User is on consumption specific de vapeur page and clicks to go to the level 3 kpis, should have the right title on the app bar with kpis displayed', function(){
        consumptionSpecificDeVapeurPage.validateKPIsForLevel3Displayed();
        consumptionSpecificDeVapeurPage.validatePageBarTitle("Consommation de vapeur");
    });

    it('When: User clicks on the back navigation it should go to the production page ', function () {
        consumptionSpecificDeVapeurPage.goToProductionPage();
    });

});