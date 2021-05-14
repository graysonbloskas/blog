const router = require('express').Router();
const { Blog, Comment, User} = require('../models');


// home, get all blog posts. No requirement to be logged in.
router.get('/', async (req, data) => {
    try {
        const blogPost = await Blog.findAll();
        const blogMap = blogPost.map((blog) => blog.get({ plain:true }));
        data.render('home', blogMap);
    } catch (error) {
        data.status(500).json(error);
    };
});
// router.get('/', async (req, data) => {
//     data.render('home', {layout: 'main.handlebars'})
// });

// redirect to home page on login
router.get('/login', (req, data) => {
    if (req.session.loggedIn) {
        data.redirect('/');
        return;
    }
    data.render('login');
})

// router.get('/post/:id', async (req, data) => {

// })

module.exports = router;