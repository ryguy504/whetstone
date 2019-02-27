const url = require('url');
const config = require('./configuration');

module.exports = {
  generateURL: function(city, country) {
    const baseUrlConfig = config.baseUrl;
    //const queryConfig = config.weatherQuery;
    const APIkey = config.APIkey;

    console.log('I im the general URL');
    let requestQuery = config.weatherQuery;

    try {

      if (city !== 'undefined') {
     
        requestQuery.q = city;
        requestQuery.country = country;
        requestQuery.units = config.weatherQuery.units;
        requestQuery.appid = config.APIkey;
        console.log(requestQuery);
      
     return url.format({
        protocol: baseUrlConfig.protocol,
        hostname: baseUrlConfig.hostname,
        pathname: baseUrlConfig.path,
        query: requestQuery,
      });
    } 
  }
    catch(error) {
      
      console.log(error);
      
  };
},




      filterFiveDay: function(data){
        try {
          let tempData = [];
          for(let i = 0;i <= 4;i++) {
            tempData.push(data[4+(8*i)]);
          }

          console.log('tempData', tempData);
          return tempData;
      }

      catch (error) {
          console.log(error);
      }
  },

      filterResponse: function(data){
        try {
        const temporaryData = data.map(x => {
          let y = {
            temp: Math.round(x.main.temp),
            weatherID: x.weather[0].id
            }
          return y;
        })

        return temporaryData;
      }

      catch(error) {
        console.log(error);
      }
},
};