var page = require('./page');

var consumptionSpecificDeVapeurPage = Object.create(page, {

    navigationBackButton: { get: function () { return browser.element('//button[@aria-label="Menu"]'); } },
    moreKPIsButton: { get: function () { return browser.element('//div[@class="indicator-details__all-kpi"]'); } },
    consumptionSpecificDeVapeurButton: { get: function () { return browser.element('//a[@href="#/kpis/pap/production/cs_vapeur"]'); } },
    productionButton: { get: function () { return browser.element('//span[contains(string(), "Production")]'); } },
    pageBarTitleHeader: { get: function () { return browser.element('//span[@class="reporting_app-bar__title"]'); } },
    pageBarSubTitleHeader: { get: function () { return browser.element('//div[@class="reporting_app-bar__subtitle"]'); } },
    errorMessageDiv: { get: function () { return browser.element('//div[@class="reporting-error-message"]'); } },
    lastUpdatedHeader: { get: function () { return browser.element('//h2[@class="indicator-details__last-update"]'); } },
    indicatorTitlesDiv: { get: function () { return browser.elements('//div[@class="indicator-element__head-title"]'); } },

    //Consommation de Vapeur BUTTON
    consommationDeVapeurLevel2Button: { get: function () { return browser.element('//a[@href="#/kpis/pap/production/c_vapeur"]'); } },


    //LEVEL 2 KPIS Consommation de Vapeur
    consommationDeVapeurLevel2: { get: function () { return browser.element('//div[@id="c_vapeur"]//div[@class="indicator-element__indicator-title indicator-element__highlighted"]'); } },
    consommationDeVapeurLevel2Value: { get: function () { return browser.element('//div[@id="c_vapeur"]//span[@class="indicator-element__middle-container__value__normal"]'); } },
    quantiteDeProduction54: { get: function () { return browser.element('//div[@id="ACP_54"]//div[@class="indicator-element__indicator-title indicator-element__highlighted"]'); } },
    quantiteDeProduction54Value: { get: function () { return browser.element('//div[@id="ACP_54"]//span[@class="indicator-element__middle-container__value__normal"]'); } },

    //LEVEL 3 KPIS Consommation de Vapeur
    echelonJConsommationDeVapeur54: { get: function () { return browser.element('//div[@id="c_vapeur_echelonj"]//div[@class="indicator-element__indicator-title indicator-element__highlighted"]'); } },
    echelonJConsommationDeVapeur54Value: { get: function () { return browser.element('//div[@id="c_vapeur_echelonj"]//div[@class="indicator-element__middle-container__value"]'); } },
    echelonKConsommationDeVapeur54: { get: function () { return browser.element('//div[@id="c_vapeur_echelonk"]//div[@class="indicator-element__indicator-title indicator-element__highlighted"]'); } },
    echelonKConsommationDeVapeur54Value: { get: function () { return browser.element('//div[@id="c_vapeur_echelonk"]//div[@class="indicator-element__middle-container__value"]'); } },
    echelonLConsommationDeVapeur54: { get: function () { return browser.element('//div[@id="c_vapeur_echelonj"]//div[@class="indicator-element__indicator-title indicator-element__highlighted"]'); } },
    echelonLConsommationDeVapeur54Value: { get: function () { return browser.element('//div[@id="c_vapeur_echelonj"]//div[@class="indicator-element__middle-container__value"]'); } },

    goToConsumptionSpecificDeVapeurPage: {
        value: function () {
            browser.url('/reporting/#/');
            browser.pause(3000);
            this.moreKPIsButton.click();
            browser.pause(1000);
            this.consumptionSpecificDeVapeurButton.click();
        }
    },

    validateKPIsDisplayed: {
        value: function () {
            browser.pause(3000);
            expect(this.consommationDeVapeurLevel2.getText()).toBe("Consommation de vapeur (T)");
            expect(this.consommationDeVapeurLevel2Value.getText()).not.toBe("N/A");
            expect(this.quantiteDeProduction54.getText()).toBe("Quantité de production ACP 54% (TP2O5)");
            expect(this.quantiteDeProduction54Value.getText()).toBe("0");
        }
    },

    validatePageBarTitle: {
        value: function (headerExpected) {
            var pageHeader = this.pageBarTitleHeader.getText();
            expect(pageHeader).toBe(headerExpected);
        }
    },

    validateKPIsForLevel3Displayed: {
        value: function () {
            this.consommationDeVapeurLevel2Button.click();
            browser.pause(2000);
            var lastUpdatedMessage = this.lastUpdatedHeader.getText();
            var pageSubHeader = this.pageBarSubTitleHeader.getText();
            var titles = [];
            this.indicatorTitlesDiv.value.forEach(function(result){
                titles.push(result.getText());
            });

            expect(this.echelonJConsommationDeVapeur54.getText()).toBe("Consommation de vapeur (t)");
            expect(this.echelonJConsommationDeVapeur54Value.getText()).not.toBe("N/A");
            expect(this.echelonKConsommationDeVapeur54.getText()).toBe("Consommation de vapeur (t)");
            expect(this.echelonKConsommationDeVapeur54Value.getText()).not.toBe("N/A");
            expect(this.echelonLConsommationDeVapeur54.getText()).toBe("Consommation de vapeur (t)");
            expect(this.echelonLConsommationDeVapeur54Value.getText()).not.toBe("N/A");
            expect(pageSubHeader).toBe("Consommation spécifique de vapeur");
            expect(lastUpdatedMessage).toContain("Dernière mise-à-jour il y a");
            expect(lastUpdatedMessage).toContain("jours");
            expect(lastUpdatedMessage).not.toContain("N/A");
            expect(titles).toContain("ECHELON J");
            expect(titles).toContain("ECHELON K");
            expect(titles).toContain("ECHELON L");
        }
    },

    goToProductionPage: {
        value: function () {
            this.navigationBackButton.click();
            this.navigationBackButton.click();
            browser.pause(1500);
            expect(this.productionButton.getText()).toBe("Production");
        }
    }

});

module.exports = consumptionSpecificDeVapeurPage;