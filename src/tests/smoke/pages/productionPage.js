var page = require('./page');

var productionPage = Object.create(page, {

    dateDifference: { get: function () { return Math.round((Date.now() / 86400000) - (1531699200000 / 86400000)); }},

    navigationBackButton: { get: function () { return browser.element('//button[@aria-label="Menu"]'); } },
    pageBarTitleHeader: { get: function () { return browser.element('//span[@class="reporting_app-bar__title"]'); } },
    pageBarSubTitleHeader: { get: function () { return browser.element('//div[@class="reporting_app-bar__subtitle"]'); } },
    errorMessageDiv: { get: function () { return browser.element('//div[@class="reporting-error-message"]'); } },
    lastUpdatedHeader: { get: function () { return browser.element('//h2[@class="indicator-details__last-update"]'); } },
    tabTitleDiv: { get: function () { return browser.element('//div[@class="indicators-tab__tab-title"]'); } },
    tabHeadTitleDiv: { get: function () { return browser.element('//div[@class="indicator-element__head-title"]'); } },
    indicatorTitlesDiv: { get: function () { return browser.elements('//div[@class="indicator-element__head-title"]'); } },

    productionButton: { get: function () { return browser.element('//span[contains(string(), "Production")]'); } },
    qualityButton: { get: function () { return browser.element('//span[contains(string(), "Qualité")]'); } },
    securityButton: { get: function () { return browser.element('//span[contains(string(), "Securité")]'); } },
    fiveSButton: { get: function () { return browser.element('//span[contains(string(), "5S")]'); } },
    maintenanceButton: { get: function () { return browser.element('//span[contains(string(), "Maintenance")]'); } },
    processusButton: { get: function () { return browser.element('//span[contains(string(), "Processus")]'); } },
    moreKPIsButton: { get: function () { return browser.element('//div[@class="indicator-details__all-kpi"]'); } },

    //ACP 28 BUTTONS
    productionACP28Button: { get: function () { return browser.element('//a[@href="#/kpis/pap/production/ACP_28"]'); } },
    productionACP28Level2Button: { get: function () { return browser.element('//a[@href="#/kpis/pap/production/acp_28_filtreA-B_lvl2"]'); } },

    //ACP 54 BUTTONS
    productionACP54Button: { get: function () { return browser.element('//a[@href="#/kpis/pap/production/ACP_54"]'); } },
    echelonJQuantityACP54Button: { get: function () { return browser.element('//a[@href="#/kpis/pap/production/ACP_54_ECHELON_J"]'); } },
    echelonKQuantityACP54Button: { get: function () { return browser.element('//a[@href="#/kpis/pap/production/ACP_54_ECHELON_K"]'); } },
    echelonLQuantityACP54Button: { get: function () { return browser.element('//a[@href="#/kpis/pap/production/ACP_54_ECHELON_L"]'); } },


    //LEVEL 1 KPIS
    quantiteDeProduction28: { get: function () { return browser.element('//div[@id="ACP_28"]//div[@class="indicator-element__indicator-title indicator-element__highlighted"]'); } },
    quantiteDeProduction28Value: { get: function () { return browser.element('//div[@id="ACP_28"]//div[@class="indicator-element__middle-container__value"]'); } },
    quantiteDeProduction54: { get: function () { return browser.element('//div[@id="ACP_54"]//div[@class="indicator-element__indicator-title indicator-element__highlighted"]'); } },
    quantiteDeProduction54Value: { get: function () { return browser.element('//div[@id="ACP_54"]//div[@class="indicator-element__middle-container__value"]'); } },
    consumptionPhosphate: { get: function () { return browser.element('//div[@id="cs_pulpe_phosphate"]//div[@class="indicator-element__indicator-title"]'); } },
    consumptionPhosphateValue: { get: function () { return browser.element('//div[@id="cs_pulpe_phosphate"]//div[@class="indicator-element__middle-container__value"]'); } },
    consumptionWater: { get: function () { return browser.element('//div[@id="water_cons_specific"]//div[@class="indicator-element__indicator-title"]'); } },
    consumptionWaterValue: { get: function () { return browser.element('//div[@id="water_cons_specific"]//div[@class="indicator-element__middle-container__value"]'); } },
    consumptionSulphuricAcid: { get: function () { return browser.element('//div[@id="sulfiric_acid_cons_specific"]//div[@class="indicator-element__indicator-title"]'); } },
    consumptionSulphuricAcidValue: { get: function () { return browser.element('//div[@id="sulfiric_acid_cons_specific"]//div[@class="indicator-element__middle-container__value"]'); } },
    consumptionCadanceAttacque: { get: function () { return browser.element('//div[@id="cadence_attack"]//div[@class="indicator-element__indicator-title"]'); } },
    consumptionCadanceAttacqueValue: { get: function () { return browser.element('//div[@id="cadence_attack"]//div[@class="indicator-element__middle-container__value"]'); } },
    consumptionSpecificDeVapeur: { get: function () { return browser.element('//div[@id="cs_vapeur"]//div[@class="indicator-element__indicator-title"]'); } },
    consumptionSpecificDeVapeurValue: { get: function () { return browser.element('//div[@id="cs_vapeur"]//div[@class="indicator-element__middle-container__value"]'); } },
    consumptionCadanceMoyenConcentration: { get: function () { return browser.element('//div[@id="cadence_moy_conc"]//div[@class="indicator-element__indicator-title"]'); } },
    consumptionCadanceMoyenConcentrationValue: { get: function () { return browser.element('//div[@id="cadence_moy_conc"]//div[@class="indicator-element__middle-container__value"]'); } },
    autonomieFSA: { get: function () { return browser.element('//div[@id="fsa_autonomy"]//div[@class="indicator-element__indicator-title"]'); } },
    autonomieFSAValue: { get: function () { return browser.element('//div[@id="fsa_autonomy"]//div[@class="indicator-element__middle-container__value"]'); } },

    //LEVEL 2 KPIS QUANTITE DE PRODUCTION 28
    filtreAetBPourACP28: { get: function () { return browser.element('//div[@id="acp_28_filtreA-B_lvl2"]//div[@class="indicator-element__indicator-title indicator-element__highlighted"]'); } },
    filtreAetBPourACP28Value: { get: function () { return browser.element('//div[@id="acp_28_filtreA-B_lvl2"]//span[@class="indicator-element__middle-container__value__normal"]'); } },

    //LEVEL 3 KPIS QUANTITE DE PRODUCTION 28
    volumeDeProductionPourACP28: { get: function () { return browser.element('//div[@id="acp_28_filtreA-B_lvl3"]//div[@class="indicator-element__indicator-title indicator-element__highlighted"]'); } },
    volumeDeProductionPourACP28Value: { get: function () { return browser.element('//div[@id="acp_28_filtreA-B_lvl3"]//div[@class="indicator-element__middle-container__value"]'); } },

    //LEVEL 2 KPIS QUANTITE DE PRODUCTION 54
    echelonJQuantiteDeProduction54: { get: function () { return browser.element('//div[@id="ACP_54_ECHELON_J"]//div[@class="indicator-element__indicator-title indicator-element__highlighted"]'); } },
    echelonJQuantiteDeProduction54Value: { get: function () { return browser.element('//div[@id="ACP_54_ECHELON_J"]//div[@class="indicator-element__middle-container__value"]'); } },
    echelonKQuantiteDeProduction54: { get: function () { return browser.element('//div[@id="ACP_54_ECHELON_K"]//div[@class="indicator-element__indicator-title indicator-element__highlighted"]'); } },
    echelonKQuantiteDeProduction54Value: { get: function () { return browser.element('//div[@id="ACP_54_ECHELON_K"]//div[@class="indicator-element__middle-container__value"]'); } },
    echelonLQuantiteDeProduction54: { get: function () { return browser.element('//div[@id="ACP_54_ECHELON_L"]//div[@class="indicator-element__indicator-title indicator-element__highlighted"]'); } },
    echelonLQuantiteDeProduction54Value: { get: function () { return browser.element('//div[@id="ACP_54_ECHELON_L"]//div[@class="indicator-element__middle-container__value"]'); } },

    //LEVEL 3 KPIS QUANTITE DE PRODUCTION 54
    echelonJVolumeDeProduction54: { get: function () { return browser.element('//div[@id="ECHELON_J_VOLUME"]//div[@class="indicator-element__indicator-title indicator-element__highlighted"]'); } },
    echelonJVolumeDeProduction54Value: { get: function () { return browser.element('//div[@id="ECHELON_J_VOLUME"]//div[@class="indicator-element__middle-container__value"]'); } },
    echelonKVolumeDeProduction54: { get: function () { return browser.element('//div[@id="ECHELON_K_VOLUME"]//div[@class="indicator-element__indicator-title indicator-element__highlighted"]'); } },
    echelonKVolumeDeProduction54Value: { get: function () { return browser.element('//div[@id="ECHELON_K_VOLUME"]//div[@class="indicator-element__middle-container__value"]'); } },
    echelonLVolumeDeProduction54: { get: function () { return browser.element('//div[@id="ECHELON_L_VOLUME"]//div[@class="indicator-element__indicator-title indicator-element__highlighted"]'); } },
    echelonLVolumeDeProduction54Value: { get: function () { return browser.element('//div[@id="ECHELON_L_VOLUME"]//div[@class="indicator-element__middle-container__value"]'); } },

    validateProductionPage: {
        value: function () {
            browser.url('/');
            var pageTitle = browser.getTitle();
            expect(pageTitle).toBe('Reporting');
            expect(this.productionButton.getText()).toBe("Production");
            expect(this.qualityButton.getText()).toBe("Qualité");
            expect(this.securityButton.getText()).toBe("Securité");
            expect(this.fiveSButton.getText()).toBe("5S");
            expect(this.maintenanceButton.getText()).toBe("Maintenance");
            expect(this.processusButton.getText()).toBe("Processus");
        }
    },

    validatePageBarTitle: {
        value: function () {
            var pageHeader = this.pageBarTitleHeader.getText();
            expect(pageHeader).toBe("PAP");
        }
    },

    validateKPIsDisplayed: {
        value: function () {
            var tabTitleMessage = this.tabTitleDiv.getText();
            expect(tabTitleMessage).toBe("KPI – indicateurs de performance clé");
            expect(this.quantiteDeProduction28.getText()).toBe("Quantité de production ACP 28% (TP2O5)");
            expect(this.quantiteDeProduction28Value.getText()).toBe("1475");
            expect(this.quantiteDeProduction54.getText()).toBe("Quantité de production ACP 54% (TP2O5)");
            expect(this.quantiteDeProduction54Value.getText()).toBe("0");
            expect(this.moreKPIsButton.getText()).toBe("+ VOIR TOUS LES KPIs");
        }
    },

    clickMoreKPIsAndValidate: {
        value: function () {
            this.moreKPIsButton.click();
            expect(this.quantiteDeProduction28.getText()).toContain("ACP 28% (TP2O5)");
            expect(this.quantiteDeProduction28Value.getText()).toBe("1475");
            expect(this.quantiteDeProduction54.getText()).toContain("ACP 54% (TP2O5)");
            expect(this.quantiteDeProduction54Value.getText()).toBe("0");
            expect(this.consumptionPhosphate.getText()).toBe("Consommation spécifique de phosphate (Tsec/TP2O5)");
            expect(this.consumptionPhosphateValue.getText()).toBe("3.3981");
            expect(this.consumptionWater.getText()).toBe("Consommation spécifique d'eau (m3/TP2O5)");
            expect(this.consumptionWaterValue.getText()).toBe("8.1589");
            expect(this.consumptionSulphuricAcid.getText()).toBe("Consommation spécifique d'acide sulfirique (TMH/TP2O5)");
            expect(this.consumptionSulphuricAcidValue.getText()).toBe("2.9926");
            expect(this.consumptionCadanceAttacque.getText()).toBe("Cadence - Attaque");
            expect(this.consumptionCadanceAttacqueValue.getText()).toBe("N/A");
            expect(this.consumptionSpecificDeVapeur.getText()).toBe("Consommation spécifique de vapeur (T/TP2O5)");
            expect(this.consumptionSpecificDeVapeurValue.getText()).toBe("N/A");
            expect(this.consumptionCadanceMoyenConcentration.getText()).toBe("Cadence moyenne - Concentration");
            expect(this.consumptionCadanceMoyenConcentrationValue.getText()).toBe("N/A");
            expect(this.autonomieFSA.getText()).toBe("Autonomie FSA");
            expect(this.autonomieFSAValue.getText()).toBe("N/A");
            expect(this.moreKPIsButton.getText()).toBe("- VOIR MOINS DE KPIs");
        }
    },

    clickLessKPIsAndValidate: {
        value: function () {
            this.moreKPIsButton.click();
            expect(this.moreKPIsButton.getText()).toBe("+ VOIR TOUS LES KPIs");
        }
    },

    clickProduction28KPI: {
        value: function () {
            this.productionACP28Button.click();
            var pageHeader = this.pageBarTitleHeader.getText();
            var KPIsHeader = this.tabHeadTitleDiv.getText();
            var lastUpdatedMessage = this.lastUpdatedHeader.getText();
            var expectedUpdatedMessage = "Dernière mise-à-jour il y a " + this.dateDifference + " jours";

            expect(pageHeader).toBe("Quantité de production ACP 28%");
            expect(KPIsHeader).toBe("Filtre A + Filtre B");
            expect(lastUpdatedMessage).toBe(expectedUpdatedMessage);
            expect(this.filtreAetBPourACP28.getText()).toBe("Quantité de production (TP2O5)");
            expect(this.filtreAetBPourACP28Value.getText()).toBe("1475");
        }
    },

    clickProduction28KPILevel2: {
        value: function () {
            this.productionACP28Level2Button.click();
            var pageHeader = this.pageBarTitleHeader.getText();
            var pageSubHeader = this.pageBarSubTitleHeader.getText();
            var KPIsHeader = this.tabHeadTitleDiv.getText();
            var lastUpdatedMessage = this.lastUpdatedHeader.getText();
            var expectedUpdatedMessage = "Dernière mise-à-jour il y a " + this.dateDifference + " jours";

            expect(pageHeader).toBe("Filtre A + Filtre B");
            expect(pageSubHeader).toBe("Quantité de production ACP 28%");
            expect(KPIsHeader).toBe("Filtre A + Filtre B");
            expect(lastUpdatedMessage).toBe(expectedUpdatedMessage);
            expect(this.volumeDeProductionPourACP28.getText()).toBe("Volume de production (m3)");
            expect(this.volumeDeProductionPourACP28Value.getText()).toBe("4974");
        }
    },

    goBackToProductionPageFromLevel3: {
        value: function () {
            this.navigationBackButton.click();
            this.navigationBackButton.click();
        }
    },

    clickProduction54KPI: {
        value: function () {
            this.productionACP54Button.click();
            var pageHeader = this.pageBarTitleHeader.getText();
            var lastUpdatedMessage = this.lastUpdatedHeader.getText();
            var expectedUpdatedMessage = "Dernière mise-à-jour il y a " + this.dateDifference + " jours";
            var titles = [];
            this.indicatorTitlesDiv.value.forEach(function(result){
                titles.push(result.getText());
            });

            expect(this.echelonJQuantiteDeProduction54.getText()).toBe("Quantité de production (TP2O5)");
            expect(this.echelonJQuantiteDeProduction54Value.getText()).toBe("405");
            expect(this.echelonKQuantiteDeProduction54.getText()).toBe("Quantité de production (TP2O5)");
            expect(this.echelonKQuantiteDeProduction54Value.getText()).toBe("387");
            expect(this.echelonLQuantiteDeProduction54.getText()).toBe("Quantité de production (TP2O5)");
            expect(this.echelonLQuantiteDeProduction54Value.getText()).toBe("409");
            expect(pageHeader).toBe("Quantité de production ACP 54%");
            expect(lastUpdatedMessage).toBe(expectedUpdatedMessage);
            expect(titles).toContain("ECHELON J");
            expect(titles).toContain("ECHELON K");
            expect(titles).toContain("ECHELON L");
        }
    },

    clickProduction54KPIEchelonJ: {
        value: function () {
            this.echelonJQuantityACP54Button.click();
            var pageHeader = this.pageBarTitleHeader.getText();
            var pageSubHeader = this.pageBarSubTitleHeader.getText();
            var lastUpdatedMessage = this.lastUpdatedHeader.getText();
            var expectedUpdatedMessage = "Dernière mise-à-jour il y a " + this.dateDifference + " jours";

            expect(this.echelonJVolumeDeProduction54.getText()).toBe("Volume de production (m3)");
            expect(this.echelonJVolumeDeProduction54Value.getText()).toBe("494.2");
            expect(pageHeader).toBe("Echelon J");
            expect(pageSubHeader).toBe("Quantité de production ACP 28%");
            expect(lastUpdatedMessage).toBe(expectedUpdatedMessage);
            this.navigationBackButton.click();
        }
    },

    clickProduction54KPIEchelonK: {
        value: function () {
            this.echelonKQuantityACP54Button.click();
            var pageHeader = this.pageBarTitleHeader.getText();
            var pageSubHeader = this.pageBarSubTitleHeader.getText();
            var lastUpdatedMessage = this.lastUpdatedHeader.getText();
            var expectedUpdatedMessage = "Dernière mise-à-jour il y a " + this.dateDifference + " jours";

            expect(this.echelonKVolumeDeProduction54.getText()).toBe("Volume de production (m3)");
            expect(this.echelonKVolumeDeProduction54Value.getText()).toBe("479.1");
            expect(pageHeader).toBe("Echelon K");
            expect(pageSubHeader).toBe("Quantité de production ACP 28%");
            expect(lastUpdatedMessage).toBe(expectedUpdatedMessage);
            this.navigationBackButton.click();
        }
    },

    clickProduction54KPIEchelonL: {
        value: function () {
            this.echelonLQuantityACP54Button.click();
            var pageHeader = this.pageBarTitleHeader.getText();
            var pageSubHeader = this.pageBarSubTitleHeader.getText();
            var lastUpdatedMessage = this.lastUpdatedHeader.getText();
            var expectedUpdatedMessage = "Dernière mise-à-jour il y a " + this.dateDifference + " jours";

            expect(this.echelonLVolumeDeProduction54.getText()).toBe("Volume de production (m3)");
            expect(this.echelonLVolumeDeProduction54Value.getText()).toBe("508.4");
            expect(pageHeader).toBe("Echelon L");
            expect(pageSubHeader).toBe("Quantité de production ACP 28%");
            expect(lastUpdatedMessage).toBe(expectedUpdatedMessage);
        }
    },

    goToProductionPage: {
        value: function () {
            this.productionButton.click();
        }
    }

});

module.exports = productionPage;