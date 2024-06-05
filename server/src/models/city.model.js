module.exports = (sequelize, Sequelize) => {
  const City = sequelize.define(
    "City",
    {
      city: {
        type: Sequelize.STRING(255),
        allowNull: false,
      },
      province_idprovince: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      postalCode: {
        type: Sequelize.CHAR,
        allowNull: false,
      },
    },
    {
      timestamps: false,
      tableName: "city",
    }
  );

  City.associate = (models) => {
    City.belongsTo(models.Province, { foreignKey: "province_idprovince" });
    City.hasMany(models.Store, { foreignKey: "city_idcity" });
    City.hasMany(models.Address, { foreignKey: "city_idcity" });
  };

  return City;
};
