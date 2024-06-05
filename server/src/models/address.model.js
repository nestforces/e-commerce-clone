module.exports = (sequelize, Sequelize) => {
  const Address = sequelize.define(
    "Address",
    {
      user_iduser: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      addressLine: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      city_idcity: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      postalCode: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      recipientNames: {
        type: Sequelize.STRING(255),
        allowNull: false,
      },
      recipientsMobileNumber: {
        type: Sequelize.STRING(15),
        allowNull: false,
      },
      addressLabel: {
        type: Sequelize.STRING(255),
        allowNull: true,
      },
      addressDetails: {
        type: Sequelize.STRING(255),
        allowNull: true,
      },
      isMain: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },
      latitude: {
        type: Sequelize.STRING(255),
        allowNull: false,
      },
      longitude: {
        type: Sequelize.STRING(255),
        allowNull: false,
      },
      status: {
        type: Sequelize.STRING(15),
        allowNull: false,
      },
    },
    {
      timestamps: false,
      tableName: "address",
    }
  );

  Address.associate = (models) => {
    Address.belongsTo(models.User, { foreignKey: "user_iduser" });
    Address.belongsTo(models.City, { foreignKey: "city_idcity" });
  };

  return Address;
};
