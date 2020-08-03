var page = require('./page');

var autonomieFSAPage = Object.create(page, {

    dateDifference: { get: function () { return Math.round((Date.now() / 86400000) - (1531699200000 / 86400000)); }},

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
            browser.url('/');
            this.moreKPIsButton.click();
            this.autonomieFSAButton.click();
        }
    },

    validateKPIsDisplayed: {
        value: function () {
            expect(this.cadenceDeProduction28.getText()).toBe("Cadence de production FSA");
            expect(this.cadenceDeProduction28Value.getText()).toBe("N/A");
            this.validatePageBarTitle("Autonomie FSA", "N/A");
        }
    },

    validateLevel3KPIsDisplayed: {
        value: function () {
            this.cadenceDeProductionFSAButton.click();
            var pageSubHeader = this.pageBarSubTitleHeader.getText();

            expect(this.productionFSA.getText()).toBe("Production FSA (m3)");
            expect(this.productionFSAValue.getText()).toBe("482");
            expect(pageSubHeader).toBe("Autonomie FSA");
            this.validatePageBarTitle("Cadence de production FSA", "N/A");
        }
    },

    validateLevel4KPIsDisplayed: {
        value: function () {
            var titles = [];

            this.productionFSAButton.click();
            this.indicatorTitlesDiv.value.forEach(function(result){
                titles.push(result.getText());
            });

            var dateValue = "il y a " + this.dateDifference + " jours";

            expect(this.echelonJVolumeDeProduction.getText()).toBe("FSA 24% (m3)");
            expect(this.echelonJVolumeDeProductionValue.getText()).toBe("156");
            expect(this.echelonKVolumeDeProduction.getText()).toBe("FSA 24% (m3)");
            expect(this.echelonKVolumeDeProductionValue.getText()).toBe("326");
            expect(this.echelonLVolumeDeProduction.getText()).toBe("FSA 24% (m3)");
            expect(this.echelonLVolumeDeProductionValue.getText()).toBe("0");
            expect(titles).toContain("Echelon J");
            expect(titles).toContain("Echelon K");
            expect(titles).toContain("Echelon L");
            this.validatePageBarTitle("Production FSA", dateValue);
        }
    },

    validatePageBarTitle: {
        value: function (title, date) {
            var pageHeader = this.pageBarTitleHeader.getText();
            var lastUpdatedMessage = this.lastUpdatedHeader.getText();
            var expectedUpdatedMessage = "Dernière mise-à-jour " + date;
            expect(lastUpdatedMessage).toBe(expectedUpdatedMessage);
            expect(pageHeader).toBe(title);
        }
    },

    goToProductionPage: {
        value: function () {
            this.navigationBackButton.click();
            this.navigationBackButton.click();
            this.navigationBackButton.click();
            expect(this.productionButton.getText()).toBe("Production");
        }
    }

});

module.exports = autonomieFSAPage;