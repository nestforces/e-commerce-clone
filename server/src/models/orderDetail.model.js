module.exports = (sequelize, Sequelize) => {
  const OrderDetail = sequelize.define(
    "OrderDetail",
    {
      order_idorder: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      quantity: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      subtotal: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      productStock_idproductStock: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
    },
    {
      timestamps: false,
      tableName: "orderdetail",
    }
  );

  OrderDetail.associate = (models) => {
    OrderDetail.belongsTo(models.Order, { foreignKey: "order_idorder" });
    OrderDetail.belongsTo(models.ProductStock, { foreignKey: "productStock_idproductStock" });
  };

  return OrderDetail;
};
