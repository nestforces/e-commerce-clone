module.exports = (sequelize, Sequelize) => {
  const Role = sequelize.define(
    "Role",
    {
      role: {
        type: Sequelize.STRING(45),
        allowNull: false,
      },
    },
    {
      timestamps: false,
      modelName: "Role",
      tableName: "role",
    }
  );

  Role.associate = (models) => {
    Role.hasMany(models.User, { foreignKey: "role_idrole" });
  };

  return Role;
};
