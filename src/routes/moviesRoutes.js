const express = require("express");
const router = express.Router();
const moviesController = require("../controllers/moviesController");

router.get("/movies", moviesController.list);
router.get("/movies/new", moviesController.new);
router.get("/movies/recommended", moviesController.recomended);
router.get("/movies/add", moviesController.add);
router.post("/movies/create", moviesController.store);

router.get("/movies/detail/:id", moviesController.detail);
router.get("/movies/edit/:id", moviesController.edit);
//router.post("/movies/edit/:id", moviesController.edit);

module.exports = router;
