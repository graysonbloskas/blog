const sequelize = require('../config/connection');
const seedUser = require('./userSeed');
const seedBlog = require('./blogSeed');
const seedComment = require('./commentSeed');

const seedAll = async () => {
    await sequelize.sync({ force: true });

    await seedUser();

    await seedBlog();

    await seedComment();
    
    process.exit(0);
};

seedAll();