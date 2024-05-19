module.exports = (sequelize, DataTypes) => {

    const Order = sequelize.define("orders", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
          },
        amount: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        userId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
              model: "users",
              key: 'id',
            },
          },
    });


    return Order;
}
