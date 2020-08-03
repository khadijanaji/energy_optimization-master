var page = require('./page');

var consumptionSpecificDePhosphatePage = Object.create(page, {

    navigationBackButton: { get: function () { return browser.element('//button[@aria-label="Menu"]'); } },
    moreKPIsButton: { get: function () { return browser.element('//div[@class="indicator-details__all-kpi"]'); } },
    consumptionSpecificDePhosphateButton: { get: function () { return browser.element('//a[@href="#/kpis/pap/production/cs_pulpe_phosphate"]'); } },
    productionButton: { get: function () { return browser.element('//span[contains(string(), "Production")]'); } },
    pageBarTitleHeader: { get: function () { return browser.element('//span[@class="reporting_app-bar__title"]'); } },
    lastUpdatedHeader: { get: function () { return browser.element('//h2[@class="indicator-details__last-update"]'); } },

    //Consumption Specific De Phosphate KPIS
    quantiteDeProduction28: { get: function () { return browser.element('//div[@id="ACP_28"]//div[@class="indicator-element__indicator-title indicator-element__highlighted"]'); } },
    quantiteDeProduction28Value: { get: function () { return browser.element('//div[@id="ACP_28"]//div[@class="indicator-element__middle-container__value"]'); } },
    consumptionSpecificPhosphate: { get: function () { return browser.element('//div[@id="pulpe_phosphate"]//div[@class="indicator-element__indicator-title indicator-element__highlighted"]'); } },
    consumptionSpecificPhosphateValue: { get: function () { return browser.element('//div[@id="pulpe_phosphate"]//div[@class="indicator-element__middle-container__value"]'); } },

    goToConsumptionSpecificDePhosphatePage: {
        value: function () {
            browser.url('/reporting/#/');
            browser.pause(3000);
            this.moreKPIsButton.click();
            browser.pause(1000);
            this.consumptionSpecificDePhosphateButton.click();
        }
    },

    validateKPIsDisplayed: {
        value: function () {
            browser.pause(3000);
            expect(this.quantiteDeProduction28.getText()).toBe("Quantité de production ACP 28% (TP2O5)");
            expect(this.quantiteDeProduction28Value.getText()).not.toBe("N/A");
            expect(this.consumptionSpecificPhosphate.getText()).toBe("Pulpe phosphate (Tsec)");
            expect(this.consumptionSpecificPhosphateValue.getText()).not.toBe("N/A");
        }
    },

    validatePageBarTitle: {
        value: function () {
            var pageHeader = this.pageBarTitleHeader.getText();
            expect(pageHeader).toBe("Consommation spécifique de phosphate");
        }
    },

    goToProductionPage: {
        value: function () {
            this.navigationBackButton.click();
            browser.pause(1500);
            expect(this.productionButton.getText()).toBe("Production");
        }
    }

});

module.exports = consumptionSpecificDePhosphatePage;