module.exports = (sequelize, Sequelize) => {
  const User = sequelize.define(
    "User",
    {
      username: {
        type: Sequelize.STRING(255),
        allowNull: false,
      },
      email: {
        type: Sequelize.STRING(255),
        allowNull: false,
      },
      password: {
        type: Sequelize.STRING(255),
        allowNull: true,
      },
      fullname: {
        type: Sequelize.STRING(255),
        allowNull: false,
      },
      avatar: {
        type: Sequelize.STRING(255),
        allowNull: true,
      },
      registrationDate: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      role_idrole: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      status: {
        type: Sequelize.STRING(45),
        allowNull: false,
      },
      referralCode: {
        type: Sequelize.STRING(45),
        allowNull: true,
      },
      referralBy_iduser: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      resetToken: {
        type: Sequelize.STRING(255),
        allowNull: true,
      },
      verification_status: {
        type: Sequelize.STRING(45),
        allowNull: false,
      },
      store_idstore: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      resetTokenUsed: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      resetTokenExpires: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      googleLogin: {
        type: Sequelize.TINYINT,
        allowNull: false,
      }
    },
    {
      sequelize,
      timestamps: false,
      modelName: "User",
      tableName: "user",
    }
  );

  User.associate = (models) => {
    User.belongsTo(models.Role, { foreignKey: "role_idrole" });
    User.hasMany(models.Order, { foreignKey: "user_iduser" });
    User.hasMany(models.Address, { foreignKey: "user_iduser" });
    User.hasMany(models.DiscountUsage, { foreignKey: "user_iduser" });
    User.hasMany(models.RatingsAndReviews, { foreignKey: "user_iduser" });
    User.belongsTo(models.Store, { foreignKey: "store_idstore" });
    User.belongsToMany(models.Discount, {
      through: "VoucherUser",
      foreignKey: "user_iduser",
    });
  };

  return User;
};
