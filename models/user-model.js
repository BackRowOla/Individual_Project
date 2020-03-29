module.exports = (sequelize, DataTypes) => {
    return sequelize.define('users', {
        username: {
            type: DataTypes.STRING
        },
        email: {
            type: DataTypes.STRING
        },
        password: {
            type: DataTypes.STRING
        }
    }, { underscored: true, timestamps: false });
}