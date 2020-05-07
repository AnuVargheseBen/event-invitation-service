import Event from '../models/Event';

function save(req, res) {
  const { name, description } = req.body;

  const event = new Event({ name, description });
  return event.save().then((_event) => res.status(200).json({ id: _event._id }));
}

async function getDocument(req, res) {
  const events = await Event.find({});
  return res.json(events);
}

export { save, getDocument };
