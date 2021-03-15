const express = require("express");

const router = express.Router();

const Workouts = require("../models/workoutsModels.js");
router.post("/api/workouts", ({ body }, res) => {
  const newWorkout = new Workouts(body);
  console.log();
  //   Workouts.create(newWorkout).then((newWork) => {
  //     res.json(newWork);
  //   });
});

router.put("/api/workouts/", ({ body }, res) => {});

module.exports = router;
