const { Model, DataTypes} = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('sequelize');

class User extends Model {
    checkPassword(loginPass) {
        return bcrypt.compareSync(loginPass, this.password)
    }
};

User.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true, 
            autoIncrement: true, 
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false, 
            unique: true, 
            validate: {
                isEmail: {
                    args: true, 
                    msg: "Enter a valid email address",
                },
            },
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
    },

    {
        hooks: {
            async beforeCreate(newUser) {
                newUser.password = await bcrypt.hash(newUser.password, 10);
                return newUser;
            }
        },
        sequelize,
        timestamps: false, 
        freezeTableName: true, 
        underscored: true, 
        modelName: 'user',
    }
);

module.exports = User;