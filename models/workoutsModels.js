const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutsDB = new Schema({
  exerciseName: {
    type: String,
    trim: true,
    required: "Exercise Name is Required",
  },

  weight: {
    type: Number,
    trim: true,
    required: "weight is Required",
  },

  sets: {
    type: Number,
    trim: true,
    required: "weight is Required",
  },

  reps: {
    type: Number,
    trim: true,
    required: "weight is Required",
  },
  length: {
    type: Number,
    trim: true,
    required: "weight is Required",
  },

  userCreated: {
    type: Date,
    default: Date.now,
  },

  isDone: {
    type: Boolean,
    default: false,
  },
});

const Workouts = mongoose.model("Workouts", WorkoutsDB);

module.exports = Workouts;
