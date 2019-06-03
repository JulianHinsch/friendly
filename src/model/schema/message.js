module.exports = (database, DataTypes) => {
    return database.define('message', {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            unique: true,
            primaryKey: true,
        },
        userId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            unique: false,
            foreignKey: true,
        },
        conversationId: {
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