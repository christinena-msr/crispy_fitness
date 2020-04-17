const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    day: {
        type: Date,
        default: Date.now
    },
    exercises: [], 
    totalDuration: Number
});

workoutSchema.methods.sumTotalDuration = function() {
    this.exercises.forEach(exercise => {
       this.totalDuration += exercise.duration;
    });
    return this.totalDuration;
}
const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;