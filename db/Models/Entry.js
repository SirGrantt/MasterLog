
module.exports = (sequelize, DataTypes) => {
  const Entry = sequelize.define('Entry', {
    wineName: {
      type: DataTypes.STRING,
    },
    producer: {
      type: DataTypes.STRING,
    },
    country: {
      type: DataTypes.STRING,
    },
    region: {
      type: DataTypes.STRING,
    },
    vintage: {
      type: DataTypes.STRING,
    },
    varietals: {
      type: DataTypes.ARRAY(DataTypes.STRING),
    },
    notes: {
      type: DataTypes.TEXT,
    },
    tags: {
      type: DataTypes.ARRAY(DataTypes.STRING),
    },
    id: {
      primaryKey: true,
      type: DataTypes.UUID,
    },
    userId: {
      type: DataTypes.UUID,
    },
  });

  return Entry;
};
