const Trip = require('../models/travlr');

const tripsList = async function (req, res) {
  try {
    const trips = await Trip.find({}).exec();

    if (!trips || trips.length === 0) {
      return res.status(404).json({ message: 'No trips found' });
    }

    return res.status(200).json(trips);
  } catch (err) {
    return res.status(500).json(err);
  }
};

const tripsFindByCode = async function (req, res) {
  try {
    if (!req.params.tripCode) {
      return res.status(400).json({ message: 'Trip code is required' });
    }

    const trip = await Trip.findOne({ code: req.params.tripCode }).exec();

    if (!trip) {
      return res.status(404).json({ message: 'Trip not found' });
    }

    return res.status(200).json(trip);
  } catch (err) {
    return res.status(500).json(err);
  }
};

const tripsAddTrip = async function (req, res) {
  try {
    const newTrip = await Trip.create({
      code: req.body.code,
      name: req.body.name,
      length: req.body.length,
      start: req.body.start,
      resort: req.body.resort,
      perPerson: req.body.perPerson,
      image: req.body.image,
      description: req.body.description
    });

    return res.status(201).json(newTrip);
  } catch (err) {
    return res.status(400).json(err);
  }
};

const tripsUpdateTrip = async function (req, res) {
  try {
    if (!req.params.tripCode) {
      return res.status(400).json({ message: 'Trip code is required' });
    }

    const updatedTrip = await Trip.findOneAndUpdate(
      { code: req.params.tripCode },
      {
        code: req.body.code,
        name: req.body.name,
        length: req.body.length,
        start: req.body.start,
        resort: req.body.resort,
        perPerson: req.body.perPerson,
        image: req.body.image,
        description: req.body.description
      },
      { new: true, runValidators: true }
    ).exec();

    if (!updatedTrip) {
      return res.status(404).json({ message: 'Trip not found' });
    }

    return res.status(200).json(updatedTrip);
  } catch (err) {
    return res.status(400).json(err);
  }
};

const tripsDeleteTrip = async function (req, res) {
  try {
    if (!req.params.tripCode) {
      return res.status(400).json({ message: 'Trip code is required' });
    }

    const deletedTrip = await Trip.findOneAndDelete({ code: req.params.tripCode }).exec();

    if (!deletedTrip) {
      return res.status(404).json({ message: 'Trip not found' });
    }

    return res.status(200).json({ message: 'Trip deleted', trip: deletedTrip });
  } catch (err) {
    return res.status(500).json(err);
  }
};

module.exports = {
  tripsList,
  tripsFindByCode,
  tripsAddTrip,
  tripsUpdateTrip,
  tripsDeleteTrip
};
