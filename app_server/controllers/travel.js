const request = require('request');

const apiOptions = {
  server: 'http://localhost:3000'
};

const renderTravelPage = (req, res, responseBody) => {
  res.render('travel', {
    title: 'Travlr Getaways',
    trips: responseBody
  });
};

const travel = (req, res) => {
  const path = '/api/trips';

  const requestOptions = {
    url: `${apiOptions.server}${path}`,
    method: 'GET',
    json: {}
  };

  request(requestOptions, (err, response, body) => {
    renderTravelPage(req, res, body);
  });
};

module.exports = {
  travel
};