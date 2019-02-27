
const body = require('body-parser');
const generateURL = require('../util').generateURL;
const filterFiveDay = require('../util').filterFiveDay;
const filterResponse = require('../util').filterResponse;
const fetch = require('node-fetch');
const weather = require('openweather-apis');
const config = require('../configuration');


module.exports = (app) => {
  

  app.post('/getWeather', async (req, res) =>  {
    const requestBody = req.body;
    const city = req.body.city;
    const country = req.body.country;
   
       try {

        const apiURL = await generateURL(city);

        const weatherData = await fetch(apiURL).catch(err => {
          console.log('err: ', err)
        
        })

        const dataJSON = await weatherData.json();
        //console.log('data',data);
        const filteredJSONdata = await  filterFiveDay(dataJSON.list);

        const finalData = await filterResponse(filteredJSONdata);
        console.log('dataFinal',finalData);

        res.send(finalData);

        } catch (error)  {
          console.log('Error ', error);
        //console.log('Error Log:', error)
      }
    }
)};


