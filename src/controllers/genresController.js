const db = require("../database/models/index");

const genresController = {
  list: function (req, res) {
    db.Genres.findAll().then(function (genres) {
      return res.render("genresList", { genres });
    });
  },
  detail: function (req, res) {
    db.Genres.findByPk(req.params.id).then(function (genre) {
      return res.render("genresDetail", { genre });
    });
  },
};

module.exports = genresController;
