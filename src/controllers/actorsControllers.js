const db = require("../database/models/index");

const actorsControllers = {
  list: function (req, res) {
    db.Actors.findAll().then((actors) =>
      res.render("actorsList", { actors: actors })
    );
  },
  detail: function (req, res) {
    db.Actors.findByPk(req.params.id).then((actor) =>
      res.render("actorsDetail", { actor })
    );
  },
};

module.exports = actorsControllers;
