module.exports = (sequelize, Sequelize) => {
  const DiscountUsage = sequelize.define(
    "DiscountUsage",
    {
      user_iduser: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      discount_iddiscount: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      usageDate: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      status: {
        type: Sequelize.STRING(45),
        allowNull: false,
      },
    },
    {
      timestamps: false,
      tableName: "discountusage",
    }
  );

  DiscountUsage.associate = (models) => {
    DiscountUsage.belongsTo(models.User, { foreignKey: "user_iduser" });
    DiscountUsage.belongsTo(models.Discount, { foreignKey: "discount_iddiscount" });
  };

  return DiscountUsage;
};
