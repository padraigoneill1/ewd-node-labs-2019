import express from 'express';
import User from './userModel';
import asyncHandler from 'express-async-handler';

const router = express.Router(); // eslint-disable-line

// Get all users, using try/catch to handle errors
router.get('/', asyncHandler(async (req, res) => {
    const contacts = await User.find();
    res.status(200).json(contacts);
}));

// authenticate a user, using async handler
router.post('/', asyncHandler(async (req, res) => {
    if (!req.body.username || !req.body.password) {
        res.status(401).send('authentication failed');
    } else {
        const user = await User.findByUserName(req.body.username);
        if (user.comparePassword(req.body.password)) {
            req.session.user = req.body.username;
            req.session.authenticated = true;
            res.status(200).end("authentication success!");
        } else {
            res.status(401).end('authentication failed');
        }

    }
}));

export default router;