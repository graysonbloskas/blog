const router = require('express').Router();
const { User, Comment, Blog } = require('../../models');

// creates a new user
router.post('/', async (req, data) => {
    console.log(req.body)

    try {
        const dbUserData = await User.create({
            username: req.body.username,
            password: req.body.password
        });
        req.session.save(() => {
            req.session.loggedIn = true;
            data.status(200).json(dbUserData);
        });
    } catch (err) {
        console.log(err);
        data.status(500).json(err);
    }
});