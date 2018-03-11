const okta = require('@okta/okta-sdk-nodejs');

const client = new okta.Client({
  orgUrl: 'https://dev-235335.oktapreview.com/',
  token: '00k86cUaic7FRMqwQmBK1bu99taK6Q1ua72cN619q8'
});

module.exports = client;