module.exports = (sequelize, DataTypes) => {
    return sequelize.define('recipes', {
        name: {
            type: DataTypes.STRING
        },
        cooking_length: {
            type: DataTypes.STRING
        },
        cooking_method: {
            type: DataTypes.STRING
        }
    }, { timestamps: false });
}