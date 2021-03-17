const express = require("express");

const router = express.Router();

const Workouts = require("../models/workoutsModels.js");
router.post("/api/workouts", (req, res) => {
  //   console.log(JSON.stringify(req.body));
  //   const newWorkout = new Workouts(req.body);
  //   console.log(newWorkout);
  Workouts.create({
    name: "Bicep Curl",
    duration: 20,
    weight: 100,
    reps: 10,
    sets: 4,
  }).then((newWork) => {
    res.json(newWork);
  });
});

router.put("/api/workouts/", ({ body }, res) => {});

module.exports = router;
