const okta = require('@okta/okta-sdk-nodejs');

const client = new okta.Client({
  orgUrl: 'https://dev-235335.oktapreview.com/',
  token: '00xnuOavEi31O-r2JRbblUs14nH6_eAFHOUdFyt3wu '
});

module.exports = client;