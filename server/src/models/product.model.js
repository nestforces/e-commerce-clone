module.exports = (sequelize, Sequelize) => {
  const Product = sequelize.define(
    "Product",
    {
      name: {
        type: Sequelize.STRING(45),
        allowNull: false,
      },
      description: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      price: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      createdBy_iduser: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      status: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },
      massProduct: {
        type: Sequelize.STRING(45),
        allowNull: false,
      },
      mass_idmass: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      packaging_idpackaging: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
    },
    {
      timestamps: false,
      tableName: "product",
    }
  );

  Product.associate = (models) => {
    Product.belongsTo(models.User, { foreignKey: "createdBy_iduser" });
    Product.belongsTo(models.Mass, { foreignKey: "mass_idmass" });
    Product.belongsTo(models.Packaging, { foreignKey: "packaging_idpackaging" });
    Product.hasMany(models.ProductStock, { foreignKey: "product_idproduct" });
    Product.hasMany(models.RatingsAndReviews, { foreignKey: "product_idproduct" });
    Product.hasMany(models.ProductImage, { foreignKey: "product_idproduct" });
    Product.belongsToMany(models.ProductCategory, {
      through: "ProductCategory_has_Product",
      foreignKey: "product_idproduct",
    });
  };

  return Product;
};
