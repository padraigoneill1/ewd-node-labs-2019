import dotenv from 'dotenv';
import express from 'express';
import contactsRouter from './api/contacts';
import bodyParser from 'body-parser';
import postsRouter from './api/posts';
import mongoose from 'mongoose';
import loadContacts from './contactsData';
import loadPosts from './postsData';
import loadUsers from './userData';

import './db';
import usersRouter from './api/users';
import session from 'express-session';
import authenticate from './authenticate';

dotenv.config();

const app = express();

const port = process.env.PORT;

mongoose.connect(process.env.mongoDB);
// Populate DB with sample data
if (process.env.seedDb) {
  loadContacts();
  loadPosts();
  loadUsers();
}

//session middleware
app.use(session({
  secret: 'ilikecake',
  resave: true,
  saveUninitialized: true
}));

// configure body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

app.use('/api/contacts', contactsRouter);
app.use('/api/posts', authenticate, postsRouter);
//User router
app.use('/api/users', usersRouter);

// app.use(express.static('public'));



// add middleware to handle any errors.
// app.use((err, req, res, next) => {
//   console.error(err.stack);
//   res.status(500).send(`Something broke! ${err.message}`);
// });

app.listen(port, () => {
  console.info(`Server running at ${port}`);
});