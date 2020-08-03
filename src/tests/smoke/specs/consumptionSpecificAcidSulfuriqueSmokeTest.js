var consumptionSpecificAcidSulfuriquePage = require('../pages/consumptionSpecificAcidSulfuriquePage.js');

describe('Consumption Specific Acid Sulfurique Page', function() {
    'use strict';

    it('When: User accesses the web app and clicks on the more button, they should be able to click on the consumption specific acid sulfurique and be on the page', function () {
        consumptionSpecificAcidSulfuriquePage.goToConsumptionSpecificAcidSulfuriquePage();
        consumptionSpecificAcidSulfuriquePage.validateKPIsDisplayed();
    });

    it('When: User is on consumption specific acid sulfurique page, should have the right title on the app bar', function(){
        consumptionSpecificAcidSulfuriquePage.validatePageBarTitle();
    });

    it('When: User clicks on the back navigation it should go to the production page ', function () {
        consumptionSpecificAcidSulfuriquePage.goToProductionPage();
    });

});