module.exports = (sequelize, DataTypes) => {
    const OrderTop = sequelize.define("orderTop", {
        topId:{
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

    

    return OrderTop;
};
