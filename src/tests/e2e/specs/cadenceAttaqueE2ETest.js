var cadenceAttaquePage = require('../pages/cadenceAttaquePage.js');

describe('Cadence Attacque Eau Page', function() {
    'use strict';

    it('When: User accesses the web app and clicks on the more button, they should be able to click on the cadence attaque and be on the page', function () {
        cadenceAttaquePage.goToCadenceAttaquePage();
        cadenceAttaquePage.validateKPIsDisplayed();
    });

    it('When: User is on cadence attacque page, should have the right title on the app bar', function(){
        cadenceAttaquePage.validatePageBarTitle();
    });

    it('When: User clicks on the back navigation it should go to the production page ', function () {
        cadenceAttaquePage.goToProductionPage();
    });

});