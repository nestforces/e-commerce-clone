module.exports = (sequelize, Sequelize) => {
  const Journal = sequelize.define(
    "Journal",
    {
      store_idstore: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      add: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },
      quantity: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      beforeStock: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      afterStock: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      transactionDate: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      admin_iduser: {
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
      tableName: "journal",
    }
  );

  Journal.associate = (models) => {
    Journal.belongsTo(models.Store, { foreignKey: "store_idstore" });
    Journal.belongsTo(models.User, { foreignKey: "admin_iduser" });
    Journal.belongsTo(models.ProductStock, { foreignKey: "productStock_idproductStock" });
  };

  return Journal;
};
