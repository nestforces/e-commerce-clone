module.exports = (sequelize, Sequelize) => {
  const Store = sequelize.define(
    "Store",
    {
      name: {
        type: Sequelize.STRING(45),
        allowNull: false,
      },
      city_idcity: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      latitude: {
        type: Sequelize.STRING(255),
        allowNull: false,
      },
      longitude: {
        type: Sequelize.STRING(255),
        allowNull: false,
      },
      storeAddress: {
        type: Sequelize.STRING(255),
        allowNull: true,
      },
      status: {
        type: Sequelize.STRING(255),
        allowNull: false,
      },
    },
    {
      timestamps: false,
      modelName: "Store",
      tableName: "store",
    }
  );

  Store.associate = (models) => {
    Store.belongsTo(models.City, { foreignKey: "city_idcity" });
    Store.hasMany(models.ProductStock, { foreignKey: "store_idstore" });
    Store.hasMany(models.Order, { foreignKey: "store_idstore" });
    Store.hasMany(models.Journal, { foreignKey: "store_idstore" });
    Store.hasMany(models.User, { foreignKey: "store_idstore" });
    Store.hasMany(models.Discount, { foreignKey: "store_idstore" });
  };

  return Store;
};
