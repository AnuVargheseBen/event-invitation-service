import mongoose from 'mongoose';

const eventSchema = new mongoose.Schema({
  name: String,
  description: String,
});

const eventModel = mongoose.model('events', eventSchema);
export default eventModel;
