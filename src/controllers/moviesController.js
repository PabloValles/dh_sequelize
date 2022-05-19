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
  recomended: (req, res) => {
    db.Movies.findAll({
      where: {
        rating: { [db.Sequelize.Op.gt]: 8 },
      },
      order: [["release_date", "DESC"]],
      limit: 5,
    }).then((movies) => {
      res.render("recommendedMovies", { movies });
    });
  },
  add: (req, res) => {
    db.Genres.findAll().then(function (genres) {
      return res.render("newMovie", { genres });
    });
  },
  store: (req, res) => {
    db.Movies.create({
      title: req.body.title,
      rating: req.body.rating,
      awards: req.body.awards,
      release_date: req.body.release_date,
      length: req.body.length,
      genre_id: req.body.genre_id,
    }).then(() => {
      return res.redirect("/movies");
    });
  },
};

module.exports = moviesController;
