var page = require('./page');

var autonomieFSAPage = Object.create(page, {
    navigationBackButton: { get: function () { return browser.element('//button[@aria-label="Menu"]'); } },
    moreKPIsButton: { get: function () { return browser.element('//div[@class="indicator-details__all-kpi"]'); } },
    autonomieFSAButton: { get: function () { return browser.element('//a[@href="#/kpis/pap/production/fsa_autonomy"]'); } },
    cadenceDeProductionFSAButton: { get: function () { return browser.element('//a[@href="#/kpis/pap/production/fsa_production_cadence"]'); } },
    productionFSAButton: { get: function () { return browser.element('//a[@href="#/kpis/pap/production/fsa_production"]'); } },
    productionButton: { get: function () { return browser.element('//button[contains(string(), "Production")]'); } },
    pageBarTitleHeader: { get: function () { return browser.element('//span[@class="reporting_app-bar__title"]'); } },
    pageBarSubTitleHeader: { get: function () { return browser.element('//div[@class="reporting_app-bar__subtitle"]'); } },
    lastUpdatedHeader: { get: function () { return browser.element('//h2[@class="indicator-details__last-update"]'); } },
    indicatorTitlesDiv: { get: function () { return browser.elements('//div[@class="indicator-element__head-title"]'); } },

    //Cadence De Production KPIS
    cadenceDeProduction28: { get: function () { return browser.element('//div[@id="fsa_production_cadence"]//div[@class="indicator-element__indicator-title indicator-element__highlighted"]'); } },
    cadenceDeProduction28Value: { get: function () { return browser.element('//div[@id="fsa_production_cadence"]//div[@class="indicator-element__middle-container__value"]'); } },

    //Production FSA KPIS
    productionFSA: { get: function () { return browser.element('//div[@id="fsa_production"]//div[@class="indicator-element__indicator-title indicator-element__highlighted"]'); } },
    productionFSAValue: { get: function () { return browser.element('//div[@id="fsa_production"]//div[@class="indicator-element__middle-container__value"]'); } },

    //Production FSA Level 4 KPIS
    echelonJVolumeDeProduction: { get: function () { return browser.element('//div[@id="fsa_production_echelonj"]//div[@class="indicator-element__indicator-title indicator-element__highlighted"]'); } },
    echelonJVolumeDeProductionValue: { get: function () { return browser.element('//div[@id="fsa_production_echelonj"]//div[@class="indicator-element__middle-container__value"]'); } },
    echelonKVolumeDeProduction: { get: function () { return browser.element('//div[@id="fsa_production_echelonk"]//div[@class="indicator-element__indicator-title indicator-element__highlighted"]'); } },
    echelonKVolumeDeProductionValue: { get: function () { return browser.element('//div[@id="fsa_production_echelonk"]//div[@class="indicator-element__middle-container__value"]'); } },
    echelonLVolumeDeProduction: { get: function () { return browser.element('//div[@id="fsa_production_echelonl"]//div[@class="indicator-element__indicator-title indicator-element__highlighted"]'); } },
    echelonLVolumeDeProductionValue: { get: function () { return browser.element('//div[@id="fsa_production_echelonl"]//div[@class="indicator-element__middle-container__value"]'); } },

    goToAutonomieFSAPage: {
        value: function () {
            browser.url('/reporting/#/');
            browser.pause(3000);
            this.moreKPIsButton.click();
            browser.pause(1000);
            this.autonomieFSAButton.click();
        }
    },

    validateKPIsDisplayed: {
        value: function () {
            browser.pause(3000);
            expect(this.cadenceDeProduction28.getText()).toBe("Cadence de production FSA");
            expect(this.cadenceDeProduction28Value.getText()).toBe("N/A");
            this.validatePageBarTitle("Autonomie FSA");
        }
    },

    validateLevel3KPIsDisplayed: {
        value: function () {
            this.cadenceDeProductionFSAButton.click();
            browser.pause(3000);
            var pageSubHeader = this.pageBarSubTitleHeader.getText();

            expect(this.productionFSA.getText()).toBe("Production FSA (m3)");
            expect(this.productionFSAValue.getText()).not.toBe("N/A");
            expect(pageSubHeader).toBe("Autonomie FSA");
            this.validatePageBarTitle("Cadence de production FSA");
        }
    },

    validateLevel4KPIsDisplayed: {
        value: function () {
            var titles = [];

            this.productionFSAButton.click();
            browser.pause(3000);
            this.indicatorTitlesDiv.value.forEach(function(result){
                titles.push(result.getText());
            });

            var lastUpdatedMessage = this.lastUpdatedHeader.getText();

            expect(this.echelonJVolumeDeProduction.getText()).toBe("FSA 24% (m3)");
            expect(this.echelonJVolumeDeProductionValue.getText()).not.toBe("N/A");
            expect(this.echelonKVolumeDeProduction.getText()).toBe("FSA 24% (m3)");
            expect(this.echelonKVolumeDeProductionValue.getText()).not.toBe("N/A");
            expect(this.echelonLVolumeDeProduction.getText()).toBe("FSA 24% (m3)");
            expect(this.echelonLVolumeDeProductionValue.getText()).not.toBe("N/A");
            expect(titles).toContain("Echelon J");
            expect(titles).toContain("Echelon K");
            expect(titles).toContain("Echelon L");
            expect(lastUpdatedMessage).toContain("Dernière mise-à-jour il y a");
            expect(lastUpdatedMessage).toContain("jours");
            expect(lastUpdatedMessage).not.toContain("N/A");
            this.validatePageBarTitle("Production FSA");
        }
    },

    validatePageBarTitle: {
        value: function (title) {
            var pageHeader = this.pageBarTitleHeader.getText();
            expect(pageHeader).toBe(title);
        }
    },

    goToProductionPage: {
        value: function () {
            this.navigationBackButton.click();
            this.navigationBackButton.click();
            this.navigationBackButton.click();
            browser.pause(1000);
            expect(this.productionButton.getText()).toBe("Production");
        }
    }

});

module.exports = autonomieFSAPage;