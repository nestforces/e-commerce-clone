module.exports = (sequelize, Sequelize) => {
  const Mass = sequelize.define(
    "Mass",
    {
      name: {
        type: Sequelize.STRING(45),
        allowNull: false,
      },
      status: {
        type: Sequelize.STRING(45),
        allowNull: false,
      },
    },
    {
      timestamps: false,
      tableName: "mass",
    }
  );

  Mass.associate = (models) => {
    Mass.hasMany(models.Product, { foreignKey: "mass_idmass" });
  };

  return Mass;
};
