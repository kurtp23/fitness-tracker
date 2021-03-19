const express = require("express");

const router = express.Router();

const Workouts = require("../models/workoutsModels.js");
router.post("/api/workouts", (req, res) => {
  console.log(req.body);

  Workouts.create(req.body).then((newWork) => {
    res.json(newWork);
  });
});
router.get("/api/workouts", async (req, res) => {
  res.json(
    await Workouts.aggregate([
      {
        $addFields: { totalDuration: { $sum: "$exercises.duration" } },
      },
    ])
  );
});

router.put("/api/workouts/:id", async (req, res) => {
  console.log(req.params.id);
  console.log(req.body);

  Workouts.findByIdAndUpdate(req.params.id, {
    $push: { exercises: req.body },
  }).catch((err) => console.log(err));
});

router.get("/api/workouts/range", async (req, res) => {
  // res.json(await Workouts.find());
  res.json(
    await Workouts.aggregate([
      {
        $addFields: { totalDuration: { $sum: "$exercises.duration" } },
      },
    ])
  );
});

module.exports = router;

// first post creates empty obj in put route for add adds in exercies
