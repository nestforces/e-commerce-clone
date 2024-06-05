module.exports = (sequelize, Sequelize) => {
  const Discount = sequelize.define(
    "Discount",
    {
      type: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      discountValue: {
        type: Sequelize.STRING(45),
        allowNull: true,
      },
      minimumPurchase: {
        type: Sequelize.STRING(45),
        allowNull: true,
      },
      buy_quantity: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      get_quantity: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      startDate: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      endDate: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      status: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },
      productStock_idproductStock: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      discountAmount: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      usageRestrictionId: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      referralCode: {
        type: Sequelize.STRING(45),
        allowNull: true,
      },
      name: {
        type: Sequelize.STRING(255),
        allowNull: true,
      },
      description: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      banner: {
        type: Sequelize.STRING(255),
        allowNull: true,
      },
      discountNom: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      distributionId: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      store_idstore: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
    },
    {
      timestamps: false,
      tableName: "discount",
    }
  );

  Discount.associate = (models) => {
    Discount.belongsTo(models.ProductStock, { foreignKey: "productStock_idproductStock" });
    Discount.belongsTo(models.UsageRestriction, { foreignKey: "usageRestrictionId" });
    Discount.belongsTo(models.DiscountType, { foreignKey: "type" });
    Discount.belongsTo(models.DiscountDistribution, { foreignKey: "distributionId" });
    Discount.belongsTo(models.Store, { foreignKey: "store_idstore" });
    Discount.belongsToMany(models.User, {
      through: "VoucherUser",
      foreignKey: "voucher_idvoucher",
    });
  };

  return Discount;
};
