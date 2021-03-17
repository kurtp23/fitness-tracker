const mongoose = require("mongoose");

const Schema = mongoose.Schema;
// name, type, weight, sets, reps, and duration of exercise.
const WorkoutsDB = new Schema({
  day: {
    type: Date,
    default: Date.now,
  },
  exercises: [
    {
      type: {
        type: String,
        trim: true,
        required: "type Name is Required",
      },
      name: {
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
        required: "sets is Required",
      },

      reps: {
        type: Number,
        trim: true,
        required: "reps is Required",
      },
      duration: {
        type: Number,
        trim: true,
        required: "duration is Required",
      },

      userCreated: {
        type: Date,
        default: Date.now,
      },

      isDone: {
        type: Boolean,
        default: false,
      },
    },
  ],
});

const Workouts = mongoose.model("Workouts", WorkoutsDB);

module.exports = Workouts;
