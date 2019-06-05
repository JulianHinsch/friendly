//could this just be a join table?

module.exports = (database, DataTypes) => {
    return database.define('follow', {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            unique: true,
            primaryKey: true,
            autoIncrement: true,
        },
        followerId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            unique: false,
            foreignKey: true,
        },
        followsId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            unique: false,
            foreignKey: true,
        },
        isApproved: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            unique: false,
            defaultValue: false,
        }
    }, {
        timestamps: true,
    });
}