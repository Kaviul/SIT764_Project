var CloudmersiveValidateApiClient = require('cloudmersive-validate-api-client');
var defaultClient = CloudmersiveValidateApiClient.ApiClient.instance;// Configure API key authorization: Apikey
var Apikey = defaultClient.authentications['Apikey'];

Apikey.apiKey = 'www.google.com';

var apiInstance = new CloudmersiveValidateApiClient.DomainApi();

var request = new CloudmersiveValidateApiClient.PhishingCheckRequest(); // PhishingCheckRequest | Input URL request
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.domainPhishingCheck(request, callback);