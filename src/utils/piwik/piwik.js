import PiwikReactRouter from "piwik-react-router";

// Constant configuration def

const PIWIK_STAGING_URL = "https://pi-analytics-stg.digilab.ocpgroup.ma";
const PIWIK_STAGING_SITE_ID = 6;

const PIWIK_PROD_URL = "https://pi-analytics.ocpgroup.ma";
const PIWIK_PROD_SITE_ID = 6;

const hostname = window && window.location && window.location.hostname;
let PIWIK_HOST = PIWIK_STAGING_URL;
let PIWIK_SITE_ID = PIWIK_STAGING_SITE_ID;

if (hostname && typeof hostname === "string") {
  if (hostname.indexOf("ocp-reporting.ocpgroup.ma") >= 0) {
    PIWIK_HOST = PIWIK_PROD_URL;
    PIWIK_SITE_ID = PIWIK_PROD_SITE_ID;
  }
}
const piwik = PiwikReactRouter({
  "url": PIWIK_HOST,
  "siteId": PIWIK_SITE_ID
});

export default piwik;
