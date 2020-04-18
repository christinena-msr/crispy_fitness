const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    day: {
        type: Date,
        default: Date.now
    },
    exercises: [
        {
            type: {
                type: String,
                required: "Please enter a type of exercise"
            },
            name: {
                type: String,
                required: "Please enter a name for the exercise"
            },
            duration: {
                type: Number, 
                required: "Please enter a duration for the exercise"
            },
            weight: Number,
            sets: Number, 
            reps: Number,
            distance: Number
        }
    ], 
    totalDuration: {
        type: Number,
        default: 0
    }
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;