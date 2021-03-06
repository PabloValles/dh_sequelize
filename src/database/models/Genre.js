module.exports = (sequelize, DataTypes) => {
  const alias = "Genres";
  const cols = {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    created_at: {
      type: DataTypes.DATE,
    },
    updated_at: {
      type: DataTypes.DATE,
    },
    name: {
      type: DataTypes.STRING,
    },
    ranking: {
      type: DataTypes.INTEGER,
    },
    active: {
      type: DataTypes.INTEGER,
    },
  };
  const config = {
    tableName: "genres",
    timestamps: false,
  };

  const Genre = sequelize.define(alias, cols, config);
  return Genre;
};
