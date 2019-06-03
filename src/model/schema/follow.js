//could this just be a join table?

module.exports = (database, DataTypes) => {
    return database.define('follow', {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            unique: true,
            primaryKey: true,
        },
        followerUserId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            unique: true,
            foreignKey: true,
        },
        followsUserId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            unique: false,
            foreignKey: true,
        },
    }, {
        timestamps: true,
    });
}