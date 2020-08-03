var consumptionSpecificDePhosphatePage = require('../pages/consumptionSpecificDePhosphatePage.js');

describe('Consumption Specific De Phosphate Page', function() {
    'use strict';

    it('When: User accesses the web app and clicks on the more button, they should be able to click on the consumption specific de phosphate and be on the page', function () {
        consumptionSpecificDePhosphatePage.goToConsumptionSpecificDePhosphatePage();
        consumptionSpecificDePhosphatePage.validateKPIsDisplayed();
    });

    it('When: User is on consumption specific de phosphate page, should have the right title on the app bar', function(){
        consumptionSpecificDePhosphatePage.validatePageBarTitle();
    });

    it('When: User clicks on the back navigation it should go to the production page ', function () {
        consumptionSpecificDePhosphatePage.goToProductionPage();
    });

});