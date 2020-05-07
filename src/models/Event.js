import mongoose from 'mongoose';

const eventSchema = new mongoose.Schema({
  name: String,
  description: String,
});

const eventModel = mongoose.model('events', eventSchema);
var eventData = new eventModel({ name: 'Wedding Event', description: 'Wedding Event of Anju' });
export default eventModel;
