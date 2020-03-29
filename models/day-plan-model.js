module.exports = (sequelize, DataTypes) => {
    return sequelize.define('dayPlan', {
        date: {
            type: DataTypes.DATEONLY
        },
    }, { timestamps: false });
}

// probably not how this should work... re-vist this and re-think it ALL!