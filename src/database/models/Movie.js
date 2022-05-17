module.exports = (sequelize, DataTypes) => {
  let alias = "Movies";
  let cols = {
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
    title: {
      type: DataTypes.STRING,
    },
    rating: {
      type: DataTypes.DECIMAL,
    },
    awards: {
      type: DataTypes.INTEGER,
    },
    release_date: {
      type: DataTypes.DATE,
    },
    length: {
      type: DataTypes.INTEGER,
    },
    genre_id: {
      type: DataTypes.INTEGER,
      foreignKey: true,
    },
  };
  let config = {
    tableName: "movies",
    timestamp: false,
  };

  const Movie = sequelize.define(alias, cols, config);

  return Movie;
};
