module.exports = (sequelize, DataTypes) => {
  const VoucherUser = sequelize.define(
    'VoucherUser',
    {
      voucher_idvoucher: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
      },
      user_iduser: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
      },
      amount: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
    },
    {
      sequelize,
      timestamps: false,
      modelName: 'VoucherUser',
      tableName: 'voucheruser',
    }
  );

  VoucherUser.associate = (models) => {
    VoucherUser.belongsTo(models.Discount, { foreignKey: 'voucher_idvoucher' });
    VoucherUser.belongsTo(models.User, { foreignKey: 'user_iduser' });
  };

  return VoucherUser;
};
