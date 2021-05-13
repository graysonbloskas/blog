const router = require('express').Router();
const { Blog, Comment, User} = require('../models');

router.get('/', async (req, data) => {
    try {
        const blogPost = await Blog.findAll({
            include: [User],
        })
    }
})