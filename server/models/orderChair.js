module.exports = (sequelize, DataTypes) => {
const OrderChair = sequelize.define('orderChair', {
    chairId:{
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



return OrderChair;


}