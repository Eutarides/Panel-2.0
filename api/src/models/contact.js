module.exports = function (sequelize, DataTypes) {
  const Contact = sequelize.define('Contact', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false
    },
    fingerprintId: {
      type: DataTypes.INTEGER
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
    subject: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'Por favor, rellena el campo "Asunto".'
        }
      }
    },
    message: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'Por favor, rellena el campo "Mensaje".'
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
    tableName: 'contacts',
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
        name: 'contacts_fingerprintId_fk',
        unique: true,
        using: 'BTREE',
        fields: [
          { name: 'fingerprintId' }
        ]
      },
      {
        name: 'contacts_email',
        unique: true,
        using: 'BTREE',
        fields: [
          { name: 'email' }
        ]
      }
    ]
  });

  Contact.associate = function (models) {
    Contact.belongsTo(models.Fingerprint, { as: 'fingerprint', foreignKey: 'fingerprintId' })
  }

  return Contact;
}