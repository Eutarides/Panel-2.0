module.exports = function (sequelize, DataTypes) {
  const Sale = sequelize.define('Sale', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    cartId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'Por favor, rellena el campo "Carrito".'
        }
      }
    },
    customerId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'Por favor, rellena el campo "Cliente".'
        }
      }
    },
    paymentMethodId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'Por favor, rellena el campo "Método de pago".'
        }
      }
    },
    couponId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'Por favor, rellena el campo "Cupón".'
        }
      }
    },
    reference: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'Por favor, rellena el campo "Referencia".'
        }
      }
    },
    totalPrice: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
      validate: {
        notNull: {
          msg: 'Por favor, rellena el campo "Precio total".'
        }
      }
    },
    totalBasePrice: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
      validate: {
        notNull: {
          msg: 'Por favor, rellena el campo "Precio base total".'
        }
      }
    },
    totalTaxPrice: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
      validate: {
        notNull: {
          msg: 'Por favor, rellena el campo "Valor impsitivo total".'
        }
      }
    },
    saleDate: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'Por favor, rellena el campo "Fecha de venta".'
        }
      }
    },
    saleTime: {
      type: DataTypes.TIME,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'Por favor, rellena el campo "Hora de venta".'
        }
      }
    },
    createdAt: {
      type: DataTypes.DATE,
      get () {
        return this.getDataValue('createdAt')
          ? this.getDataValue('createdAt').toISOString().split('T')[0]
          : null
      }
    },
    updatedAt: {
      type: DataTypes.DATE,
      get () {
        return this.getDataValue('updatedAt')
          ? this.getDataValue('updatedAt').toISOString().split('T')[0]
          : null
      }
    }
  },
  {
    sequelize,
    tableName: 'sales',
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
        name: 'sales_cartId_fk',
        using: 'BTREE',
        fields: [
          { name: 'cartId' }
        ]
      },
      {
        name: 'sales_customerId_fk',
        using: 'BTREE',
        fields: [
          { name: 'customerId' }
        ]
      },
      {
        name: 'sales_paymentMethodId_fk',
        using: 'BTREE',
        fields: [
          { name: 'paymentMethodId' }
        ]
      },
      {
        name: 'sales_couponId_fk',
        using: 'BTREE',
        fields: [
          { name: 'couponId' }
        ]
      }
    ]
  })

  Sale.associate = function (models) {
    Sale.belongsTo(models.Cart, { as: 'cart', foreignKey: 'cartId' }),
    Sale.belongsTo(models.Customer, { as: 'customer', foreignKey: 'customerId' }),
    Sale.belongsTo(models.PaymentMethod, { as: 'paymentMethod', foreignKey: 'paymentMethodId' }),
    Sale.belongsTo(models.Coupon, { as: 'coupon', foreignKey: 'couponId' }),
    Sale.belongsToMany(models.Product, { through: models.SaleDetail, as: 'products', foreignKey: 'saleId' }),
    Sale.hasMany(models.Invoice, { as: 'invoices', foreignKey: 'saleId' }),
    Sale.hasMany(models.Return, { as: 'returns', foreignKey: 'saleId' }),
    Sale.hasMany(models.SaleDetail, { as: 'saleDetails', foreignKey: 'saleId' }),
    Sale.hasOne(models.Ticket, { as: 'ticket', foreignKey: 'saleId' })
  }

  return Sale
}