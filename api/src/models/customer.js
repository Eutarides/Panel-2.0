module.exports = function (sequelize, DataTypes) {
  const Customer = sequelize.define('Customer', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false
    },
    countryId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    cityId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    dialCodeId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    fiscalName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    comercialName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    vat: {
      type: DataTypes.STRING,
      allowNull: false
    },
    comercialAddress: {
      type: DataTypes.STRING,
      allowNull: true
    },
    fiscalAddress: {
      type: DataTypes.STRING,
      allowNull: false
    },
    postalCode: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
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
    tableName: 'customers',
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
        name: 'customers_countryId_fk',
        unique: true,
        using: 'BTREE',
        fields: [
          { name: 'countryId' }
        ]
      },
      {
        name: 'customers_cityId_fk',
        unique: true,
        using: 'BTREE',
        fields: [
          { name: 'cityId' }
        ]
      },
      {
        name: 'customers_dialCodeId_fk',
        unique: true,
        using: 'BTREE',
        fields: [
          { name: 'dialCodeId' }
        ]
      },
      {
        name: 'customers_email',
        unique: true,
        using: 'BTREE',
        fields: [
          { name: 'email' }
        ]
      }
      
    ]
  });

  Customer.associate = function (models) {
    Customer.belongsTo(models.Country, { as: 'country', foreignKey: 'countryId' }),
    Customer.belongsTo(models.City, { as: 'city', foreignKey: 'cityId' }),
    Customer.belongsTo(models.DialCode, { as: 'dialCode', foreignKey: 'dialCodeId' }),
    
    Customer.hasMany(models.ApiTracking, { as: 'apiTrackings', foreignKey: 'customerId' }),
    Customer.hasMany(models.Cart, { as: 'carts', foreignKey: 'customerId' }),
    Customer.hasMany(models.CustomerTracking, { as: 'customerTrackings', foreignKey: 'customerId' }),
    Customer.hasMany(models.EmailError, { as: 'emailErrors', foreignKey: 'customerId' }),
    Customer.hasOne(models.Fingerprint, { as: 'fingerprint', foreignKey: 'customerId' }),
    Customer.hasOne(models.Invoice, { as: 'invoice', foreignKey: 'customerId' }),
    Customer.hasMany(models.PageTracking, { as: 'pageTrackings', foreignKey: 'customerId' }),
    Customer.hasMany(models.CustomerError, { as: 'customerErrors', foreignKey: 'customerId' }),
    Customer.hasMany(models.Return, { as: 'returns', foreignKey: 'customerId' }),
    Customer.hasMany(models.SaleError, { as: 'saleErrors', foreignKey: 'customerId' }),
    Customer.hasOne(models.Sale, { as: 'sale', foreignKey: 'customerId' }),
    Customer.hasMany(models.SentEmail, { as: 'sentEmails', foreignKey: 'customerId' }),
    Customer.hasOne(models.Ticket, { as: 'ticket', foreignKey: 'customerId' })
  }

  return Customer;
}