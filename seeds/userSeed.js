const { User } = require('../models');

const userSeed = [
    {
    email: 'Mike@mail.com',
    password: '$2b$10$P6w98ZLmBz/xag/IOmKEo.312kN/QPgo8jd5XcjsKhOwCtuYdaMj2'
    },
    {
    email: 'James@mail.com',
    password: '$2b$10$P6w98ZLmBz/xag/IOmKEo.312kN/QPgo8jd5XcjsKhOwCtuYdaMj2',
    },
];

const seedUsers = () => User.bulkCreate(userSeed);
module.exports = seedUsers;