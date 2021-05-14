const { Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connection');

class Blog extends Model {};

Blog.init (
    {
        blog_title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
     
        blog_body: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        
    },
    {
    sequelize,
    freezeTableName: true, 
    underscored: true, 
    modelName: 'blog',
    },
);

module.exports = Blog;