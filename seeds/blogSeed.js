const { Blog } = require('../models');

const blogSeed = [
    {
        blog_title: "React",
        blog_body: "I am very excited to start learning React.",
    },
    {
        blog_title: "After React",
        blog_body: "After I have learned React, I plan to move onto learning Angular",
    },
];
const seedBlogs = () => Blog.bulkCreate(blogSeed);
module.exports = seedBlogs;