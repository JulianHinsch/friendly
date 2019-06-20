module.exports = (database, DataTypes) => {
    return database.define('follow', {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            unique: true,
            primaryKey: true,
            autoIncrement: true,
        },
        userId: {
            //if Jane follows Jerry, this is Jane's id
            type: DataTypes.INTEGER,
            allowNull: false,
            unique: false,
            foreignKey: true,
        },
        followsId: {
            //if Jane follows Jerry, this is Jerry's id
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