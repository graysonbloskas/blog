const { Comment } = require('../models');

const commentSeed = [
    {
        blogId: 1,
        comment: "I agree",
    },
    {
        blogId: 2,
        comment: "Angular is so much fun",
    },
];

const seedComments = () => Comment.bulkCreate(commentSeed);
module.exports = seedComments;