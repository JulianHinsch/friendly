module.exports = (database, DataTypes) => {
    return database.define('comment', {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            unique: true,
            primaryKey: true,
            autoIncrement: true,
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
        text: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: false,
        },
    }, {
        timestamps: true,
    });
}