module.exports = (sequelize, Sequelize) => {
  const ProductImage = sequelize.define(
    "ProductImage",
    {
      imageUrl: {
        type: Sequelize.STRING(255),
        allowNull: false,
      },
      product_idproduct: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
    },
    {
      timestamps: false,
      modelName: "ProductImage",
      tableName: "productimage",
    }
  );

  ProductImage.associate = (models) => {
    ProductImage.belongsTo(models.Product, { foreignKey: "product_idproduct" });
  };

  return ProductImage;
};
