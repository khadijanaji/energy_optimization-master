var page = require('./page');

var consumptionSpecificAcidSulfuriquePage = Object.create(page, {

    dateDifference: { get: function () { return Math.round((Date.now() / 86400000) - (1531699200000 / 86400000)); }},

    navigationBackButton: { get: function () { return browser.element('//button[@aria-label="Menu"]'); } },
    moreKPIsButton: { get: function () { return browser.element('//div[@class="indicator-details__all-kpi"]'); } },
    consumptionSpecificAcidSulfuriqueButton: { get: function () { return browser.element('//a[@href="#/kpis/pap/production/sulfiric_acid_cons_specific"]'); } },
    productionButton: { get: function () { return browser.element('//span[contains(string(), "Production")]'); } },
    pageBarTitleHeader: { get: function () { return browser.element('//span[@class="reporting_app-bar__title"]'); } },
    lastUpdatedHeader: { get: function () { return browser.element('//h2[@class="indicator-details__last-update"]'); } },

    //Consumption Specific Eau KPIS
    consumptionSpecificEau: { get: function () { return browser.element('//div[@id="sulfiric_acid_cons_raw"]//div[@class="indicator-element__indicator-title indicator-element__highlighted"]'); } },
    consumptionSpecificEauValue: { get: function () { return browser.element('//div[@id="sulfiric_acid_cons_raw"]//div[@class="indicator-element__middle-container__value"]'); } },
    quantiteDeProduction28: { get: function () { return browser.element('//div[@id="ACP_28"]//div[@class="indicator-element__indicator-title indicator-element__highlighted"]'); } },
    quantiteDeProduction28Value: { get: function () { return browser.element('//div[@id="ACP_28"]//div[@class="indicator-element__middle-container__value"]'); } },

    goToConsumptionSpecificAcidSulfuriquePage: {
        value: function () {
            browser.url('/');
            this.moreKPIsButton.click();
            this.consumptionSpecificAcidSulfuriqueButton.click();
        }
    },

    validateKPIsDisplayed: {
        value: function () {
            expect(this.consumptionSpecificEau.getText()).toBe("Consommation d'acide sulfirique (TMH)");
            expect(this.consumptionSpecificEauValue.getText()).toBe("4415");
            expect(this.quantiteDeProduction28.getText()).toBe("Quantité de production ACP 28% (TP2O5)");
            expect(this.quantiteDeProduction28Value.getText()).toBe("1475");
        }
    },

    validatePageBarTitle: {
        value: function () {
            var pageHeader = this.pageBarTitleHeader.getText();
            var lastUpdatedMessage = this.lastUpdatedHeader.getText();
            var expectedUpdatedMessage = "Dernière mise-à-jour il y a " + this.dateDifference + " jours";
            expect(lastUpdatedMessage).toBe(expectedUpdatedMessage);
            expect(pageHeader).toBe("Consommation spécifique d'acide sulfirique");
        }
    },

    goToProductionPage: {
        value: function () {
            this.navigationBackButton.click();
            expect(this.productionButton.getText()).toBe("Production");
        }
    }

});

module.exports = consumptionSpecificAcidSulfuriquePage;