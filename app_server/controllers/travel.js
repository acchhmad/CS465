const tripsEndpoint = 'http://localhost:3000/api/trips';
const options = {
  method: 'GET',
  headers: {
    Accept: 'application/json'
  }
};

const travel = async (req, res) => {
  try {
    const response = await fetch(tripsEndpoint, options);
    const trips = await response.json();

    if (!Array.isArray(trips)) {
      return res.render('travel', {
        title: 'Travlr Getaways',
        message: 'API lookup did not return a trip list.',
        trips: []
      });
    }

    return res.render('travel', {
      title: 'Travlr Getaways',
      trips
    });
  } catch (err) {
    return res.status(500).render('travel', {
      title: 'Travlr Getaways',
      message: err.message,
      trips: []
    });
  }
};

module.exports = {
  travel
};
