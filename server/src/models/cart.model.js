module.exports = (sequelize, Sequelize) => {
  const Cart = sequelize.define(
    "Cart",
    {
      user_iduser: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      totalQuantity: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      addedAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      totalPrice: {
        type: Sequelize.DOUBLE,
        allowNull: false,
      },
    },
    {
      timestamps: false,
      tableName: "cart",
    }
  );

  Cart.associate = (models) => {
    Cart.belongsTo(models.User, { foreignKey: "user_iduser" });
    Cart.hasMany(models.CartDetail, { foreignKey: "cart_idcart" });
  };

  return Cart;
};
