module.exports = function (sequelize, DataTypes) {
  const ReturnDetail = sequelize.define('ReturnDetail', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    returnId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'Por favor, rellena el campo "Devolución".'
        }
      }
    },
    productId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'Por favor, rellena el campo "Product".'
        }
      }
    },
    localeId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    priceId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'Por favor, rellena el campo "Precio".'
        }
      }
    },
    taxId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'Por favor, rellena el campo "Impuesto".'
        }
      }
    },
    priceDiscountId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'Por favor, rellena el campo "Descuento".'
        }
      }
    },
    productName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'Por favor, rellena el campo "Nombre de Producto".'
        }
      }
    },
    basePrice: {
      type: DataTypes.DECIMAL(6, 2),
      allowNull: false,
      validate: {
        notNull: {
          msg: 'Por favor, rellena el campo "Precio Base".'
        }
      }
    },
    taxPrice: {
      type: DataTypes.DECIMAL(6, 2),
      allowNull: false,
      validate: {
        notNull: {
          msg: 'Por favor, rellena el campo "Valor impositivo".'
        }
      }
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'Por favor, rellena el campo "Cantidad".'
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
    tableName: 'return_details',
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
        name: 'return_details_returnId_fk',
        using: 'BTREE',
        fields: [
          { name: 'returnId' }
        ]
      },
      {
        name: 'return_details_productId_fk',
        using: 'BTREE',
        fields: [
          { name: 'productId' }
        ]
      },
      {
        name: 'return_details_localeId_fk',
        using: 'BTREE',
        fields: [
          { name: 'localeId' }
        ]
      },
      {
        name: 'return_details_priceId_fk',
        using: 'BTREE',
        fields: [
          { name: 'priceId' }
        ]
      },
      {
        name: 'return_details_taxId_fk',
        using: 'BTREE',
        fields: [
          { name: 'taxId' }
        ]
      },
      {
        name: 'return_details_priceDiscountId_fk',
        using: 'BTREE',
        fields: [
          { name: 'priceDiscountId' }
        ]
      }
    ]
  })

  ReturnDetail.associate = function (models) {
    ReturnDetail.belongsTo(models.Return, { as: 'return', foreignKey: 'returnId' }),
    ReturnDetail.belongsTo(models.Product, { as: 'product', foreignKey: 'productId' }),
    ReturnDetail.belongsTo(models.Locale, { as: 'locale', foreignKey: 'localeId' }),
    ReturnDetail.belongsTo(models.Price, { as: 'price', foreignKey: 'priceId' }),
    ReturnDetail.belongsTo(models.Tax, { as: 'tax', foreignKey: 'taxId' }),
    ReturnDetail.belongsTo(models.PriceDiscount, { as: 'priceDiscount', foreignKey: 'priceDiscountId' })
  }

  return ReturnDetail
}