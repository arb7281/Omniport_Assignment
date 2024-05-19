module.exports = (sequelize, DataTypes) => {
    const OrderTable = sequelize.define("orderTable", {
        tableId:{
            type:DataTypes.INTEGER
        },
        orderId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
              model: "orders",
              key: 'id',
            },
          },
    });

   

    return OrderTable;
};
