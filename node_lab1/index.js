import dotenv from 'dotenv';
import express from 'express';
import contactsRouter from './api/contacts';
import bodyParser from 'body-parser';
import postsRouter from './api/posts';
import mongoose from 'mongoose';
import loadContacts from './contactsData';
import loadPosts from './postsData';

dotenv.config();

const app = express();

const port = process.env.PORT;

mongoose.connect(process.env.mongoDB);
// Populate DB with sample data
if (process.env.seedDb) {
  loadContacts();
  loadPosts();
}

// configure body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

app.use('/api/contacts', contactsRouter);
app.use('/api/posts', postsRouter);

app.use(express.static('public'));

// add middleware to handle any errors.
// app.use((err, req, res, next) => {
//   console.error(err.stack);
//   res.status(500).send(`Something broke! ${err.message}`);
// });

app.listen(port, () => {
  console.info(`Server running at ${port}`);
});