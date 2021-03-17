const express = require("express");

const router = express.Router();

const Workouts = require("../models/workoutsModels.js");
router.post("/api/workouts", (req, res) => {
  console.log(JSON.parse(req.body));

  //   Workouts.create(req.body).then((newWork) => {
  //     res.json(newWork);
  //   });
});
router.get("/api/workouts", async (req, res) => {
  res.json(await Workouts.find());
});

router.put("/api/workouts/", ({ body }, res) => {});

module.exports = router;
