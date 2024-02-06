module.exports = function (sequelize, DataTypes) {
  const Company = sequelize.define('Company', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false
    },
    countryId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'Por favor, rellena el campo "País".'
        }
      }
    },
    cityId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'Por favor, rellena el campo "Ciudad".'
        }
      }
    },
    dialCodeId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'Por favor, rellena el campo "Prefijo Telefónico".'
        }
      }
    },
    fiscalName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'Por favor, rellena el campo "Nombre Fiscal".'
        }
      }
    },
    comercialName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'Por favor, rellena el campo "Nombre Comercial".'
        }
      }
    },
    vat: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'Por favor, rellena el campo "Vat".'
        }
      }
    },
    comercialAddress: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'Por favor, rellena el campo "Dirección comercial".'
        }
      }
    },
    fiscalAddress: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'Por favor, rellena el campo "Dirección Fiscal".'
        }
      }
    },
    postalCode: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'Por favor, rellena el campo "Códig Postal".'
        }
      }
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'Por favor, rellena el campo "Email".'
        },
        isEmail: {
          msg: 'Por favor, rellena el campo "Email" con un email válido.'
        },
        isUnique: function (value, next) {
          const self = this
          Customer.findOne({ where: { email: value } }).then(function (customer) {
            if (customer && self.id !== customer.id) {
              return next('Ya existe un cliente con ese email.')
            }
            return next()
          }).catch(function (err) {
            return next(err)
          })
        }
      },
      unique: true
    },
    web: {
      type: DataTypes.STRING
    },
    telephone: {
      type: DataTypes.STRING
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
    tableName: 'companies',
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
        name: 'companies_countryId_fk',
        unique: true,
        using: 'BTREE',
        fields: [
          { name: 'countryId' }
        ]
      },
      {
        name: 'companies_cityId_fk',
        unique: true,
        using: 'BTREE',
        fields: [
          { name: 'cityId' }
        ]
      },
      {
        name: 'companies_dialCodeId_fk',
        unique: true,
        using: 'BTREE',
        fields: [
          { name: 'dialCodeId' }
        ]
      },
      {
        name: 'companies_email',
        unique: true,
        using: 'BTREE',
        fields: [
          { name: 'email' }
        ]
      }
    ]
  });

  Company.associate = function (models) {
    Company.belongsTo(models.Country, { as: 'country', foreignKey: 'countryId' }),
    Company.belongsTo(models.City, { as: 'city', foreignKey: 'cityId' }),
    Company.belongsTo(models.DialCode, { as: 'dialCode', foreignKey: 'dialCodeId' })
  }

  return Company;
}