module.exports = (sequelize, Sequelize) => {
  const DiscountDistribution = sequelize.define(
    "DiscountDistribution",
    {
      type: {
        type: Sequelize.STRING(45),
        allowNull: false,
      },
      status: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },
    },
    {
      timestamps: false,
      tableName: "discountdistribution",
    }
  );

  DiscountDistribution.associate = (models) => {
    DiscountDistribution.hasMany(models.Discount, { foreignKey: "distributionId" });
  };

  return DiscountDistribution;
};
