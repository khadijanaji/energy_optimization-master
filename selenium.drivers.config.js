module.exports = {
  baseURL: 'https://selenium-release.storage.googleapis.com',
  version: '3.12.0',
  drivers: {
    chrome: {
      version: '2.40',
      arch: process.arch,
      baseURL: 'https://chromedriver.storage.googleapis.com'
    }
  }
};