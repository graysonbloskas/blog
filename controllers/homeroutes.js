const router = require('express').Router();
const { Blog, Comment, User} = require('../models');

router.get('/', async (req, data) => {
    try {
        const blogPost = await Blog.findAll();
        const blogMap = blogPost.map((blog) => blog.get({ plain:true }));
        data.render('home', blogMap);
    } catch (error) {
        data.status(500).json(error);
    };
});