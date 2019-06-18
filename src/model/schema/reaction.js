module.exports = (database, DataTypes) => {
    return database.define('reactions', {
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
        type: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: false,
            defaultValue: 'LIKE',
        }
    }, {
        timestamps: true,
    });
}