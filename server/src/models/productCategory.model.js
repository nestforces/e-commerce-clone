module.exports = (sequelize, Sequelize) => {
  const ProductCategory = sequelize.define(
    "ProductCategory",
    {
      category: {
        type: Sequelize.STRING(45),
        allowNull: false,
      },
      imageUrl: {
        type: Sequelize.STRING(255),
        allowNull: true,
      },
    },
    {
      timestamps: false,
      modelName: "ProductCategory",
      tableName: "productcategory",
    }
  );

  ProductCategory.associate = (models) => {
    ProductCategory.belongsToMany(models.Product, {
      through: "ProductCategory_has_Product",
      foreignKey: "pc_id",
    });
  };

  return ProductCategory;
};
