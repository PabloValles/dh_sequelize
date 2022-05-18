const db = require("../database/models/index");

const moviesController = {
  list: function (req, res) {
    db.Movies.findAll().then(function (movies) {
      return res.render("moviesList", { movies });
    });
  },
  detail: function (req, res) {
    db.Movies.findByPk(req.params.id).then(function (movie) {
      return res.render("moviesDetail", { movie });
    });
  },
  new: function (req, res) {
    db.Movies.findAll({
      order: [["release_date", "DESC"]],
    }).then(function (movies) {
      return res.render("newestMovies", { movies });
    });
  },
  recomended: function (req, res) {
    db.Movies.findAll({
      order: [["rating", "DESC"]],
      limit: 5,
    }).then(function (movies) {
      return res.render("recommendedMovies", { movies });
    });
  },
};

module.exports = moviesController;
