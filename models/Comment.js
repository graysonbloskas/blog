const { Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connection');

class Comment extends Model {};

Comment.init (
    {
        comment: {
            type: DataTypes.TEXT,
            allowNull: false,
        }
    },
    {
    sequelize,
    freezeTableName: true, 
    underscored: true, 
    modelName: 'comment',
    },
);

module.exports = Comment;