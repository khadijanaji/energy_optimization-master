var consumptionSpecificEauPage = require('../pages/consumptionSpecificEauPage.js');

describe('Consumption Specific Eau Page', function() {
    'use strict';

    it('When: User accesses the web app and clicks on the more button, they should be able to click on the consumption specific eau and be on the page', function () {
        consumptionSpecificEauPage.goToConsumptionSpecificEauPage();
        consumptionSpecificEauPage.validateKPIsDisplayed();
    });

    it('When: User is on consumption specific eau page, should have the right title on the app bar', function(){
        consumptionSpecificEauPage.validatePageBarTitle();
    });

    it('When: User clicks on the back navigation it should go to the production page ', function () {
        consumptionSpecificEauPage.goToProductionPage();
    });

});