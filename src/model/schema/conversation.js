module.exports = (database, DataTypes) => {
    return database.define('conversation', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true,
            unique: true,
        },
        //TODO how to implement this?

        // user1Id: {

        // },
        // user2Id: {

        // }
    });
}