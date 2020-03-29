module.exports = (sequelize, DataTypes) => {
    return sequelize.define('recipes', {
        name: {
            type: DataTypes.STRING
        },
        cooking_length: {
            type: DataTypes.STRING
        },
        meal_period: {
            type: DataTypes.STRING
        },
        ingredients: {
            type: DataTypes.STRING
        },
        cooking_method: {
            type: DataTypes.STRING
        }
    }, { underscored: true, timestamps: false });
}