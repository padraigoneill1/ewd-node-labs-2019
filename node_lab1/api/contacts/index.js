import express from 'express';
import Contact from './contactModel';
import asyncHandler from 'express-async-handler';

const router = express.Router(); // eslint-disable-line


// Get all contacts, using try/catch to handle errors
router.get('/', async (req, res) => {
  try {
    const contacts = await Contact.find();
    res.status(200).json(contacts);
  } catch (error) {
    handleError(res, error.message);
  }
});

// Create a contact, using async handler
router.post('/', asyncHandler(async (req, res) => {
  const contact = await Contact.create(req.body);
  res.status(201).json(contact);
}));

// Update a contact
router.put('/:id', asyncHandler(async (req, res) => {
  if (req.body._id) delete req.body._id;
  const contact = await Contact.update({
    _id: req.params.id,
  }, req.body, {
    upsert: false,
  });
  if (!contact) return res.sendStatus(404);
  return res.json(200, contact);
}));

// Delete a contact
router.delete('/:id', asyncHandler(async (req, res) => {
  const contact = await Contact.findById(req.params.id);
  if (!contact) return res.send(404);
  await contact.remove();
  return res.status(204).send(contact);
}));


/**
 * Handle general errors.
 * @param {object} res The response object
 * @param {object} err The error object.
 * @return {object} The response object
 */
function handleError(res, err) {
  return res.send(500, err);
};

export default router;