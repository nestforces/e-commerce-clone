module.exports = (sequelize, DataTypes) => {
  const Voucher = sequelize.define(
    'Voucher',
    {
      code: {
        type: DataTypes.STRING(45),
        allowNull: false,
      },
      type: {
        type: DataTypes.STRING(45),
        allowNull: false,
      },
      minimumPurchaseAmount: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      discountAmount: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      discountPercentage: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      maxDiscountAmount: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      expiryDate: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      usageType: {
        type: DataTypes.STRING(45),
        allowNull: true,
      },
      status: {
        type: DataTypes.STRING(45),
        allowNull: false,
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
    },
    {
      sequelize,
      timestamps: false,
      modelName: 'Voucher',
    }
  );

  return Voucher;
};
