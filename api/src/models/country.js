module.exports = function (sequelize, DataTypes) {
  const Country = sequelize.define('Country', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    iso2: {
      type: DataTypes.STRING,
      allowNull: false
    },
    iso3: {
      type: DataTypes.STRING,
      allowNull: false
    },
    visible: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true
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
    tableName: 'countries',
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
      }
    ]
  });

  Country.associate = function (models) {
    Country.hasOne(models.City, { as: 'city', foreignKey: 'countryId' }),
    Country.hasOne(models.Company, { as: 'company', foreignKey: 'countryId' }),
    Country.hasOne(models.Customer, { as: 'customer', foreignKey: 'countryId' }),
    Country.hasOne(models.DialCode, { as: 'dialCode', foreignKey: 'countryId' })
  }

  return Country;
}