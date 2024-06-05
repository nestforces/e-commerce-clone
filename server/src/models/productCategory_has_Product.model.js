module.exports = (sequelize, Sequelize) => {
  const ProductCategory_has_Product = sequelize.define(
    "ProductCategory_has_Product",
    {
      productCategory_idproductCategory: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
      },
      product_idproduct: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
      },
    },
    {
      sequelize,
      timestamps: false,
      modelName: 'ProductCategory_has_Product',
      tableName: 'productcategory_has_product',
      indexes: [
        {
          unique: true,
          fields: ['productCategory_idproductCategory', 'product_idproduct'],
          name: 'unique_pc_p_id', // Custom name for the unique constraint
        },
      ],
    }
  );

  ProductCategory_has_Product.associate = (models) => {
    ProductCategory_has_Product.belongsTo(models.ProductCategory, {
      foreignKey: 'productCategory_idproductCategory',
    });
    ProductCategory_has_Product.belongsTo(models.Product, {
      foreignKey: 'product_idproduct',
    });
  };

  return ProductCategory_has_Product;
};
