module.exports = (database, DataTypes) => {
    return database.define('like', {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            unique: true,
            primaryKey: true,
        },
        postId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            unique: false,
            foreignKey: true,
        },
        userId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            unique: false,
            foreignKey: true,
        },
        type: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: false,
        }
    }, {
        timestamps: true,
    });
}