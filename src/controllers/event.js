import { Types } from 'mongoose';

import Event from '../models/Event';

function save(req, res) {
  const { name, description } = req.body;

  const event = new Event({ name, description });
  return event.save().then((_event) => res.status(200).json({ id: _event._id }));
}

async function getDocuments(req, res) {
  const events = await Event.find({});
  return res.json(events);
}

async function getDocument(req, res) {
  const ObjectId = Types.ObjectId;
  const id = req.params.id;
  // console.log({ id });
  const event = await Event.findOne({ _id: ObjectId(id) });
  return res.json(event);
}

async function deleteEvent(req, res) {
  const ObjectId = Types.ObjectId;
  const id = req.params.id;
  console.log({ id });
  const event = await Event.findByIdAndRemove({ _id: ObjectId(id) });
  console.log({ event });
  return res.json(event);
}

async function updateEvent(req,res){
  const ObjectId = Types.ObjectId;
  const id = req.params.id;
  const event = await Event.findByIdAndUpdate({ _id: ObjectId(id)},req.body);
  console.log({ event });
  return res.json(event);
}

export { save, getDocuments, getDocument, deleteEvent ,updateEvent};
