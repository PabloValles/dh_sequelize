const db = require("../database/models/index");

const moviesController = {
  list: function (req, res) {
    db.Movies.findAll().then(function (peliculas) {
      return res.render("/movies", { peliculas: peliculas });
    });
  },
};

module.exports = moviesController;
