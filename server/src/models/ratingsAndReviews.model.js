module.exports = (sequelize, Sequelize) => {
  const RatingsAndReviews = sequelize.define(
    "RatingsAndReviews",
    {
      user_iduser: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      rating: {
        type: Sequelize.FLOAT,
        allowNull: true,
      },
      reviewText: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      reviewDate: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      product_idproduct: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      order_idorder: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
    },
    {
      timestamps: false,
      modelName: "RatingsAndReviews",
      tableName: "ratingandreview",
    }
  );

  RatingsAndReviews.associate = (models) => {
    RatingsAndReviews.belongsTo(models.User, { foreignKey: "user_iduser" });
    RatingsAndReviews.belongsTo(models.Product, { foreignKey: "product_idproduct" });
    RatingsAndReviews.belongsTo(models.Order, { foreignKey: "order_idorder" });
  };

  return RatingsAndReviews;
};
