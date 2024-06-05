module.exports = (sequelize, Sequelize) => {
  const Order = sequelize.define(
    "Order",
    {
      user_iduser: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      store_idstore: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      status: {
        type: Sequelize.STRING(45),
        allowNull: false,
      },
      totalAmount: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      orderDate: {
        type: Sequelize.DATE,
        allowNull: true,
      },
      paymentMethod: {
        type: Sequelize.STRING(45),
        allowNull: true,
      },
      paymentCode: {
        type: Sequelize.STRING(255),
        allowNull: true,
      },
      paymentStatus: {
        type: Sequelize.STRING(255),
        allowNull: true,
      },
      totalDiscount: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      totalShippingDiscount: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      totalShipping: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
    },
    {
      timestamps: false,
      tableName: "order",
    }
  );

  Order.associate = (models) => {
    Order.belongsTo(models.User, { foreignKey: "user_iduser" });
    Order.belongsTo(models.Store, { foreignKey: "store_idstore" });
    Order.hasMany(models.OrderDetail, { foreignKey: "order_idorder" });
  };

  return Order;
};
