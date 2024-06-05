module.exports = (sequelize, Sequelize) => {
  const Province = sequelize.define(
    "Province",
    {
      province: {
        type: Sequelize.STRING(45),
        allowNull: false,
      },
    },
    {
      timestamps: false,
      modelName: "Province",
      tableName: "province",
    }
  );

  Province.associate = (models) => {
    Province.hasMany(models.City, { foreignKey: "province_idprovince" });
  };

  return Province;
};
