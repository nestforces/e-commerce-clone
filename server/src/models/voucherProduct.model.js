module.exports = (sequelize, DataTypes) => {
  const VoucherProduct = sequelize.define(
    'VoucherProduct',
    {
      voucher_idvoucher: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
      },
      productStock_idproductStock: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
      },
    },
    {
      timestamps: false,
      modelName: 'VoucherProduct',
    }
  );

  VoucherProduct.associate = (models) => {
    VoucherProduct.belongsTo(models.Voucher, { foreignKey: 'voucher_idvoucher' });
    VoucherProduct.belongsTo(models.ProductStock, { foreignKey: 'productStock_idproductStock' });
  };

  return VoucherProduct;
};
