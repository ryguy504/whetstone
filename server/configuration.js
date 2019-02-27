
module.exports = {
    baseUrl: {
      protocol: 'http',
      hostname: 'api.openweathermap.org',
      path: '/data/2.5/forecast',
    },
  
    weatherQuery: {
      q: 'city',
      country: 'country',
      units: 'imperial'
      
    },

    APIkey: '7bf064037e9c0d6fc11d954154198245'
  };