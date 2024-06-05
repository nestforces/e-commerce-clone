module.exports = (sequelize, Sequelize) => {
  const CartDetail = sequelize.define(
    "CartDetail",
    {
      productStock_idproductStock: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      quantity: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      price: {
        type: Sequelize.DOUBLE,
        allowNull: false,
      },
      cart_idcart: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
    },
    {
      timestamps: false,
      tableName: "cartdetail",
    }
  );

  CartDetail.associate = (models) => {
    CartDetail.belongsTo(models.ProductStock, { foreignKey: "productStock_idproductStock" });
    CartDetail.belongsTo(models.Cart, { foreignKey: "cart_idcart" });
  };

  return CartDetail;
};
