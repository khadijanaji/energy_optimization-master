var autonomieFSAPage = require('../pages/autonomieFSAPage.js');

describe('Autonomie FSA Page', function() {
    'use strict';

    it('When: User accesses the web app and clicks on the more button, they should be able to click on the autonomie fsa and be on the page', function () {
        autonomieFSAPage.goToAutonomieFSAPage();
        autonomieFSAPage.validateKPIsDisplayed();
    });

    it('When: User is on autonomie fsa page, and clicks on cadance de production fsa, they should be taken to the page with KPIs valid', function(){
        autonomieFSAPage.validateLevel3KPIsDisplayed();
    });

    it('When: User is on cadance de production fsa page, and clicks on production fsa, they should be taken to the level 4 page with KPIs valid', function(){
        autonomieFSAPage.validateLevel4KPIsDisplayed();
    });

    it('When: User clicks on the back navigation it should go to the production page ', function () {
        autonomieFSAPage.goToProductionPage();
    });

});