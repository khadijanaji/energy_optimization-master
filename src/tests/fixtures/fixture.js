const express = require('express')

exports.configureApplication = function() {
    const app = express()
    app.use('/', express.static('public-html'))

    app.get('/api/pap/production/', function (req, res) {
      res.send('{"lastUpdated":1531699200000,' +
      '"indicators":[{"id":20180716,"code":"ACP_28","title":"ACP 29%","value":1475.0,"target":null,"unit":"TP2O5","hasChild":false,"isHighlighted":true,"category":"Epaississement-Attaque-Filtration A&B"},' +
      '{"id":20180716,"code":"ACP_54","title":"ACP 54%","value":0.0,"target":null,"unit":"TP2O5","hasChild":false,"isHighlighted":true,"category":"Production ACP 54%"},' +
      '{"id":20180716,"code":"cs_pulpe_phosphate","title":"Pulpe Phosphate","value":3.3981,"target":null,"unit":"Tsec/TP2O5","hasChild":false,"isHighlighted":true,"category":"Epaississement-Attaque-Filtration A&B"},' +
      '{"id":20180716,"code":"water_cons_specific","title":"Eau brute","value":8.1589,"target":null,"unit":"m3/TP2O5","hasChild":false,"isHighlighted":true,"category":"Epaississement-Attaque-Filtration A&B"},' +
      '{"id":20180716,"code":"sulfiric_acid_cons_specific","title":"Acide sulfurique","value":2.9926,"target":null,"unit":"TMH/TP2O5","hasChild":false,"isHighlighted":true,"category":"Epaississement-Attaque-Filtration A&B"},' +
      '{"id":null,"code":"cadence_attack","title":null,"value":null,"target":null,"unit":null,"hasChild":false,"isHighlighted":true,"category":null},' +
      '{"id":0,"code":"cs_vapeur","title":"Consommation spécifique de vapeur","value":null,"target":null,"unit":"T/TP2O5","hasChild":false,"isHighlighted":true,"category":"Consommation spécifique de vapeur"},' +
      '{"id":null,"code":"cadence_moy_conc","title":null,"value":null,"target":null,"unit":null,"hasChild":false,"isHighlighted":true,"category":null},' +
      '{"id":null,"code":"fsa_autonomy","title":null,"value":null,"target":null,"unit":null,"hasChild":false,"isHighlighted":true,"category":null}]}');
    })

    app.get('/api/pap/production/ACP_28', function (req, res) {
      res.send('{"lastUpdated":1531699200000,' +
      '"indicators":[{"id":20180716,"code":"acp_28_filtreA-B_lvl2","title":"ACP 29%","value":1475.0,"target":null,"unit":"TP2O5","hasChild":false,"isHighlighted":true,"category":"Epaississement-Attaque-Filtration A&B"}]}');
    })

    app.get('/api/pap/production/acp_28_filtreA-B_lvl2', function (req, res) {
      res.send('{"lastUpdated":1531699200000,' +
      '"indicators":[{"id":20180716,"code":"acp_28_filtreA-B_lvl3","title":"ACP 29%","value":4974.0,"target":null,"unit":"m3","hasChild":false,"isHighlighted":true,"category":"Epaississement-Attaque-Filtration A&B"}]}');
    })

    app.get('/api/pap/production/ACP_54', function (req, res) {
      res.send('{"lastUpdated":1531699200000,' +
      '"indicators":[{"id":20180716,"code":"ACP_54_ECHELON_J","title":"ACP 54% non clarifié","value":405.0,"target":null,"unit":"TP2O5","hasChild":false,"isHighlighted":true,"category":"Echelon J"},' +
      '{"id":20180716,"code":"ACP_54_ECHELON_K","title":"ACP 54% non clarifié","value":387.0,"target":null,"unit":"TP2O5","hasChild":false,"isHighlighted":true,"category":"Echelon K"},' +
      '{"id":20180716,"code":"ACP_54_ECHELON_L","title":"ACP 54% non clarifié","value":409.0,"target":null,"unit":"TP2O5","hasChild":false,"isHighlighted":true,"category":"Echelon L"}]}');
    })

    app.get('/api/pap/production/ACP_54_ECHELON_J', function (req, res) {
      res.send('{"lastUpdated":1531699200000,"indicators":[{"id":20180716,"code":"ECHELON_J_VOLUME","title":"ACP 54% non clarifié","value":494.2,"target":null,"unit":"m3","hasChild":false,"isHighlighted":true,"category":"Echelon J"}]}');
    })

    app.get('/api/pap/production/ACP_54_ECHELON_K', function (req, res) {
      res.send('{"lastUpdated":1531699200000,"indicators":[{"id":20180716,"code":"ECHELON_K_VOLUME","title":"ACP 54% non clarifié","value":479.1,"target":null,"unit":"m3","hasChild":false,"isHighlighted":true,"category":"Echelon K"}]}');
    })

    app.get('/api/pap/production/ACP_54_ECHELON_L', function (req, res) {
      res.send('{"lastUpdated":1531699200000,"indicators":[{"id":20180716,"code":"ECHELON_L_VOLUME","title":"ACP 54% non clarifié","value":508.4,"target":null,"unit":"m3","hasChild":false,"isHighlighted":true,"category":"Echelon L"}]}');
    })

    app.get('/api/pap/production/cs_pulpe_phosphate', function (req, res) {
      res.send('{"lastUpdated":1531699200000,' +
      '"indicators":[{"id":20180716,"code":"ACP_28","title":"ACP 29%","value":1475.0,"target":null,"unit":"TP2O5","hasChild":false,"isHighlighted":true,"category":"Epaississement-Attaque-Filtration A&B"},' +
      '{"id":20180716,"code":"pulpe_phosphate","title":"Pulpe Phosphate","value":5013.0,"target":null,"unit":"Tsec","hasChild":false,"isHighlighted":true,"category":"Epaississement-Attaque-Filtration A&B"}]}');
    })

    app.get('/api/pap/production/water_cons_specific', function (req, res) {
      res.send('{"lastUpdated":1531699200000,' +
      '"indicators":[{"id":20180716,"code":"water_cons_raw","title":"Eau brute","value":12037.0,"target":null,"unit":"m3","hasChild":false,"isHighlighted":true,"category":"Epaississement-Attaque-Filtration A&B"},' +
      '{"id":20180716,"code":"ACP_28","title":"ACP 29%","value":1475.0,"target":null,"unit":"TP2O5","hasChild":false,"isHighlighted":true,"category":"Epaississement-Attaque-Filtration A&B"}]}');
    })

    app.get('/api/pap/production/sulfiric_acid_cons_specific', function (req, res) {
      res.send('{"lastUpdated":1531699200000,' +
      '"indicators":[{"id":20180716,"code":"sulfiric_acid_cons_raw","title":"Acide sulfurique","value":4415.0,"target":null,"unit":"TMH","hasChild":false,"isHighlighted":true,"category":"Epaississement-Attaque-Filtration A&B"},' +
      '{"id":20180716,"code":"ACP_28","title":"ACP 29%","value":1475.0,"target":null,"unit":"TP2O5","hasChild":false,"isHighlighted":true,"category":"Epaississement-Attaque-Filtration A&B"}]}');
    })

    app.get('/api/pap/production/cadence_attack', function (req, res) {
      res.send('{"lastUpdated":1531699200000,"indicators":[{"id":20180716,"code":"ACP_28","title":"ACP 29%","value":1475.0,"target":null,"unit":"TP2O5","hasChild":false,"isHighlighted":true,"category":"Epaississement-Attaque-Filtration A&B"}]}');
    })

    app.get('/api/pap/production/cs_vapeur', function (req, res) {
      res.send('{"lastUpdated":1531699200000,"indicators":[{"id":0,"code":"c_vapeur","title":"Consommation de vapeur","value":3637.0,"target":null,"unit":"T","hasChild":false,"isHighlighted":true,"category":"Consommation de vapeur"},' +
      '{"id":20180716,"code":"ACP_54","title":"ACP 54%","value":0.0,"target":null,"unit":"TP2O5","hasChild":false,"isHighlighted":true,"category":"Production ACP 54%"}]}');
    })

    app.get('/api/pap/production/c_vapeur', function (req, res) {
      res.send('{"lastUpdated":1531699200000,"indicators":[{"id":20180716,"code":"c_vapeur_echelonj","title":"Vapeur BP","value":1219.0,"target":null,"unit":"t","hasChild":false,"isHighlighted":true,"category":"Echelon J"},' +
      '{"id":20180716,"code":"c_vapeur_echelonk","title":"Vapeur BP","value":1199.0,"target":null,"unit":"t","hasChild":false,"isHighlighted":true,"category":"Echelon K"},' +
      '{"id":20180716,"code":"c_vapeur_echelonl","title":"Vapeur BP","value":1219.0,"target":null,"unit":"t","hasChild":false,"isHighlighted":true,"category":"Echelon L"}]}');
    })

    app.get('/api/pap/production/cadence_moy_conc', function (req, res) {
      res.send('{"lastUpdated":null,"indicators":[{"id":null,"code":"cadence_moy_conc_echelonj_lvl2","title":null,"value":null,"target":null,"unit":null,"hasChild":false,"isHighlighted":true,"category":null},' +
      '{"id":null,"code":"cadence_moy_conc_echelonk_lvl2","title":null,"value":null,"target":null,"unit":null,"hasChild":false,"isHighlighted":true,"category":null},' +
      '{"id":null,"code":"cadence_moy_conc_echelonl_lvl2","title":null,"value":null,"target":null,"unit":null,"hasChild":false,"isHighlighted":true,"category":null}]}');
    })

    app.get('/api/pap/production/cadence_moy_conc_echelonj_lvl2', function (req, res) {
      res.send('{"lastUpdated":1531699200000,"indicators":[{"id":20180716,"code":"ACP_54_ECHELON_J","title":"ACP 54% non clarifié","value":405.0,"target":null,"unit":"TP2O5","hasChild":false,"isHighlighted":true,"category":"Echelon J"}]}');
    })

    app.get('/api/pap/production/cadence_moy_conc_echelonk_lvl2', function (req, res) {
      res.send('{"lastUpdated":1531699200000,"indicators":[{"id":20180716,"code":"ACP_54_ECHELON_K","title":"ACP 54% non clarifié","value":387.0,"target":null,"unit":"TP2O5","hasChild":false,"isHighlighted":true,"category":"Echelon K"}]}');
    })

    app.get('/api/pap/production/cadence_moy_conc_echelonl_lvl2', function (req, res) {
      res.send('{"lastUpdated":1531699200000,"indicators":[{"id":20180716,"code":"ACP_54_ECHELON_L","title":"ACP 54% non clarifié","value":409.0,"target":null,"unit":"TP2O5","hasChild":false,"isHighlighted":true,"category":"Echelon L"}]}');
    })

    app.get('/api/pap/production/fsa_autonomy', function (req, res) {
      res.send('{"lastUpdated":null,"indicators":[{"id":null,"code":"fsa_production_cadence","title":null,"value":null,"target":null,"unit":null,"hasChild":false,"isHighlighted":true,"category":null}]}');
    })

    app.get('/api/pap/production/fsa_production_cadence', function (req, res) {
      res.send('{"lastUpdated":null,"indicators":[{"id":1,"code":"fsa_production","title":"Production FSA","value":482.0,"target":null,"unit":"m3","hasChild":false,"isHighlighted":true,"category":"Production FSA"}]}');
    })

    app.get('/api/pap/production/fsa_production', function (req, res) {
      res.send('{"lastUpdated":1531699200000,' +
      '"indicators":[{"id":20180716,"code":"fsa_production_echelonj","title":"FSA 24%","value":156.0,"target":null,"unit":"m3","hasChild":false,"isHighlighted":true,"category":"Echelon J"},' +
      '{"id":20180716,"code":"fsa_production_echelonk","title":"FSA 24%","value":326.0,"target":null,"unit":"m3","hasChild":false,"isHighlighted":true,"category":"Echelon K"},' +
      '{"id":20180716,"code":"fsa_production_echelonl","title":"FSA 24%","value":0.0,"target":null,"unit":"m3","hasChild":false,"isHighlighted":true,"category":"Echelon L"}]}');
    })
    return app;
}
exports.runServer = function(app){
    expressServer = app.listen(9000, function () {
      console.log('server listening on port 9000')
    })
    return expressServer
}