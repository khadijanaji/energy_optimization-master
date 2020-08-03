/* eslint-disable */
module.exports = {
  "testURL":"http://localhost/",
  "moduleNameMapper": {"\\.(scss|css|jpg|pdf|png|svg)$": "<rootDir>/src/tests/emptyModule.js"},
  "setupTestFrameworkScriptFile": "<rootDir>src/tests/setupTests.js",
  "testMatch": ["<rootDir>/src/**/?(*.)(test|spec).js?(x)"],
  "snapshotSerializers": ["enzyme-to-json/serializer"],
  "setupFiles": ["./test-setup.js"],
  "collectCoverageFrom": [
    "src/**/*.{js,jsx}",
    "!<rootDir>/node_modules/",
    "!<rootDir>/coverage/",
    "!src/tests/smoke/**",
    "!src/tests/e2e/**",
    "!src/tests/fixtures/**",
    "!./test-setup.js",
    "!src/tests/*.js",
    "!src/sagas/helper.js",
    "!src/utils/moment-fr.js",
    "!src/utils/test-helpers.js",
    "!src/containers/IndicatorTabsContainer/*.js",
    "!src/components/CumulativeIndicator/*.js",
    "!src/containers/CumulativeIndicatorContainer/*.js",
    "!src/containers/WorkshopsDashboardPageContainer/*.js",
    "!src/containers/IndicatorCategoryPageContainer/*.js",
    "!src/utils/component-helpers.js",
    "!src/titles/*.js",
    "!src/titles/dashboard/*.js",
    "!**/index.js",
    "!src/*.js",
    "!src/sagas/piwik/*.js",
    "!src/utils/piwik/*.js"
  ],
  "coverageThreshold": {
    "global": {
      "branches": 0,
      "functions": 0,
      "lines": 0,
      "statements": 0
    }
  }
};
