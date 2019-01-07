module.exports = (database, DataTypes) => {
    return database.define('user', {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            unique: true,
            primaryKey: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: false,
            foreignKey: true,
        },
        phone: {
            type: DataTypes.INTEGER,
            allowNull: false,
            unique: true,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        passwordHash: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        }
    }, {
        timestamps: true,
    });
}