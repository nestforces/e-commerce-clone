module.exports = (sequelize, Sequelize) => {
  const UsageRestriction = sequelize.define(
    "UsageRestriction",
    {
      restriction: {
        type: Sequelize.STRING(45),
        allowNull: false,
      },
    },
    {
      sequelize,
      timestamps: false,
      modelName: "UsageRestriction",
      tableName: "usagerestriction",
    }
  );

  UsageRestriction.associate = (models) => {
    UsageRestriction.hasMany(models.Discount, { foreignKey: "usageRestrictionId" });
  };

  return UsageRestriction;
};
