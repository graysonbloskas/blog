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

// Login route
router.post('/login', async (req, data) => {
    try {
    const dbUserData = await User.findOne({
        where: {
            email: req.body.email,
        },
    });
    if (!dbUserData) {
        data.status(400).json({ message: 'Nice try; enter the correct email and password' });
        return;
    }
    const correctPassword = await dbUserData.checkPassword(req.body.password);

    if (!correctPassword) {
        data.status(400).json({ message: 'Nice try; enter the correct email and password' });
        return;
    }
    req.session.save(() => {
        req.session.loggedIn = true;
        req.session.user_id = dbUserData.id;

        data.status(200).json({ user: dbUserData, message: 'Congrats, you may continue' });
    })
    } catch (err) {
        data.status(500).json(err)
    }
});

// logout route
router.post('/logout', (req, data) => {
    if (req.session.loggedIn) {
        req.session.destroy(() => {
            data.status(204).end();

        });
    } else {
        data.status(404).end();
    }
});

module.exports = router;