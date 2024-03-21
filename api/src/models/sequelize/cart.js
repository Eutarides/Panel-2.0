module.exports = function (sequelize, DataTypes) {
  const Cart = sequelize.define('Cart', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false
    },
    uuid: {
      type: DataTypes.UUID,
      allowNull: false,
      defaultValue: DataTypes.UUIDV4,
      validate: {
        notNull: {
          msg: 'Por favor, rellena el campo "Carrito".'
        },
        isUUID: {
          args:4,
          msg: 'Por favor, introduce un valor válido.'
        }
      }
    },
    customerId: {
      type: DataTypes.INTEGER
    },
    fingerprintId: {
      type: DataTypes.INTEGER
    },
    createdAt: {
      type: DataTypes.DATE,
      get() {
        return this.getDataValue('createdAt')
          ? this.getDataValue('createdAt').toISOString().split('T')[0]
          : null
      }
    },
    updatedAt: {
      type: DataTypes.DATE,
      get() {
        return this.getDataValue('updatedAt')
          ? this.getDataValue('updatedAt').toISOString().split('T')[0]
          : null
      }
    }
  }, {
    sequelize,
    tableName: 'carts',
    timestamps: true,
    paranoid: true,
    indexes: [
      {
        name: 'PRIMARY',
        unique: true,
        using: 'BTREE',
        fields: [
          { name: 'id' }
        ]
      },
      {
        name: 'carts_customerId_fk',
        unique: true,
        using: 'BTREE',
        fields: [
          { name: 'customerId' }
        ]
      },
      {
        name: 'carts_fingerprintId_fk',
        unique: true,
        using: 'BTREE',
        fields: [
          { name: 'fingerprintId' }
        ]
      }
    ]
  });

  Cart.associate = function (models) {
    Cart.belongsTo(models.Customer, { as: 'customer', foreignKey: 'customerId' }),
    Cart.belongsTo(models.Fingerprint, { as: 'fingerprint', foreignKey: 'fingerprintId' }),
    Cart.belongsToMany(models.Product, { through: models.CartDetail, as: 'products', foreignKey: 'cartId' }),
    Cart.hasOne(models.CartDetail, { as: 'cart', foreignKey: 'cartId' }),
    Cart.hasMany(models.SaleError, { as: 'saleErrors', foreignKey: 'cartId' }),
    Cart.hasMany(models.Sale, { as: 'sales', foreignKey: 'cartId' })
  }

  return Cart;
}