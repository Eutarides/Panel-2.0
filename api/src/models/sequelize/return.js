module.exports = function (sequelize, DataTypes) {
  const Return = sequelize.define('Return', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    saleId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'Por favor, rellena el campo "Venta".'
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
          msg: 'Por favor, rellena el campo "Precio Total".'
        }
      }
    },
    totalBasePrice: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
      validate: {
        notNull: {
          msg: 'Por favor, rellena el campo "Precio base Total".'
        }
      }
    },
    totalTaxPrice: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
      validate: {
        notNull: {
          msg: 'Por favor, rellena el campo "Valor impositivo total".'
        }
      }
    },
    returnDate: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'Por favor, rellena el campo "Fecha de devolución".'
        }
      }
    },
    returnTime: {
      type: DataTypes.TIME,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'Por favor, rellena el campo "Hora de devolución".'
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
    tableName: 'returns',
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
        name: 'returns_saleId_fk',
        using: 'BTREE',
        fields: [
          { name: 'saleId' }
        ]
      },
      {
        name: 'returns_customerId_fk',
        using: 'BTREE',
        fields: [
          { name: 'customerId' }
        ]
      },
      {
        name: 'returns_paymentMethodId_fk',
        using: 'BTREE',
        fields: [
          { name: 'paymentMethodId' }
        ]
      }
    ]
  })

  Return.associate = function (models) {
    Return.belongsTo(models.Sale, { as: 'sale', foreignKey: 'saleId' }),
    Return.belongsTo(models.Customer, { as: 'customer', foreignKey: 'customerId' }),
    Return.belongsTo(models.PaymentMethod, { as: 'paymentMethod', foreignKey: 'paymentMethodId' }),
    Return.belongsToMany(models.Product, { through: models.ReturnDetail, as: 'products', foreignKey: 'returnId' }),
    Return.hasMany(models.Invoice, { as: 'invoices', foreignKey: 'returnId' }),
    Return.hasMany(models.ReturnDetail, { as: 'returnDetails', foreignKey: 'returnId' }),
    Return.hasMany(models.ReturnError, { as: 'returnErrors', foreignKey: 'returnId' }),
    Return.hasOne(models.Ticket, { as: 'ticket', foreignKey: 'returnId' })
  }

  return Return
}