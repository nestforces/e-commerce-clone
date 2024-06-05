module.exports = (sequelize, Sequelize) => {
  const Packaging = sequelize.define(
    "Packaging",
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
      tableName: "packaging",
    }
  );

  Packaging.associate = (models) => {
    Packaging.hasMany(models.Product, { foreignKey: "packaging_idpackaging" });
  };

  return Packaging;
};
