module.exports = (sequelize, Sequelize) => {
  const DiscountType = sequelize.define(
    "DiscountType",
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
      tableName: "discounttype",
    }
  );

  DiscountType.associate = (models) => {
    DiscountType.hasMany(models.Discount, { foreignKey: "type" });
  };

  return DiscountType;
};
