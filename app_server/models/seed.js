const mongoose = require('mongoose');
const fs = require('fs');
const Trip = require('./travlr');

const host = process.env.DB_HOST || '127.0.0.1';
const dbURI = `mongodb://${host}/travlr`;

const trips = JSON.parse(fs.readFileSync('./data/trips.json', 'utf8'));

mongoose.connect(dbURI);

mongoose.connection.on('connected', async () => {
  console.log(`Mongoose connected to ${dbURI}`);

  try {
    await Trip.deleteMany({});
    console.log('Existing trips removed');

    await Trip.insertMany(trips);
    console.log(`${trips.length} trips inserted`);

    mongoose.connection.close();
  } catch (err) {
    console.log('Seed error:', err);
    mongoose.connection.close();
  }
});

mongoose.connection.on('error', err => {
  console.log('Mongoose connection error:', err);
});