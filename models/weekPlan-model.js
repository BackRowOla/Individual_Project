module.exports = (sequelize, DataTypes) => {
    return sequelize.define('weekPlan', {
        day: {
            type: DataTypes.STRING
        },
        userId: {
            type: DataTypes.INTEGER,
            references: {
                model: 'users',
                key: 'id'
            }
        },
        recipeId: {
            type: DataTypes.INTEGER,
            references: {
                model: 'recipes',
                key: 'id'
            }
        },
        meal_period:{
            type: DataTypes.STRING
        }
    }, { timestamps: false });
}

// probably not how this should work... re-vist this and re-think it ALL!