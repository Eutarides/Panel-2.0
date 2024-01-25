module.exports = function (sequelize, DataTypes) {
  const AdminTracking = sequelize.define('AdminTracking', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'Por favor, rellena el campo "Usuario".'
        }
      }
    },
    entity: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'Por favor, rellena el campo "Entidad".'
        }
      }
    },
    entityId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'Por favor, rellena el campo "Entidad".'
        }
      }
    },
    action: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'Por favor, rellena el campo "Acción".'
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
  }, {
    sequelize,
    tableName: 'admin_trackings',
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
        name: 'admin_trackings_userId_fk',
        using: 'BTREE',
        fields: [
          { name: 'userId' }
        ]
      }
    ]
  })

  AdminTracking.associate = function (models) {
    AdminTracking.belongsTo(models.User, { as: 'user', foreignKey: 'userId' })
  }

  return AdminTracking
}