module.exports = function (sequelize, DataTypes) {
  const City = sequelize.define('City', {
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
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'Por favor, rellena el campo "Nombre".'
        }
      }
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
    tableName: 'cities',
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
        name: 'cities_countryId_fk',
        unique: true,
        using: 'BTREE',
        fields: [
          { name: 'countryId' }
        ]
      }
    ]
  });

  City.associate = function (models) {
    City.belongsTo(models.Country, { as: 'country', foreignKey: 'countryId' }),
    City.hasOne(models.Company, { as: 'company', foreignKey: 'cityId' }),
    City.hasOne(models.Customer, { as: 'customer', foreignKey: 'cityId' }),
    City.hasMany(models.Fingerprint, { as: 'fingerprints', foreignKey: 'cityId' })
  }

  return City;
}