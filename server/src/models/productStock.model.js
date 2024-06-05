module.exports = (sequelize, Sequelize) => {
  const ProductStock = sequelize.define(
    "ProductStock",
    {
      stock: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      product_idproduct: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      store_idstore: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      status: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      }
    },
    {
      timestamps: false,
      modelName: "ProductStock",
      tableName: "productstock",
    }
  );

  ProductStock.associate = (models) => {
    ProductStock.belongsTo(models.Product, { foreignKey: "product_idproduct" });
    ProductStock.belongsTo(models.Store, { foreignKey: "store_idstore" });
    ProductStock.hasMany(models.OrderDetail, { foreignKey: "productStock_idproductStock" });
    ProductStock.hasMany(models.Journal, { foreignKey: "productStock_idproductStock" });
    ProductStock.hasMany(models.Discount, { foreignKey: "productStock_idproductStock" });
    ProductStock.hasMany(models.CartDetail, { foreignKey: "productStock_idproductStock" });
    ProductStock.hasMany(models.VoucherProduct, { foreignKey: "productStock_idproductStock" });
  };

  return ProductStock;
};
