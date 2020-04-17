const Workout = require("../models/workout.js");

module.exports = function(app) {
    app.get("/api/workouts", (req, res) => {
        Workout.find({})
            .then(dbWorkout => {
                res.json(dbWorkout);
            })
            .catch(err => {
                res.status(400).json(err);
            });
    });
    
    app.post("/api/workouts", ({ body }, res) => {
        const workout = new Workout(body);
        workout.sumTotalDuration();
        console.log(body);
        Workout.create(workout)
            .then(dbWorkout => {
                res.json(dbWorkout);
            })
            .catch(err => {
                res.status(400).json(err);
            });
    });
    
    app.put("/api/workouts/:id", (req, res) => {
        const id = req.params.id.split("=")[1];
        Workout.find({ _id: id }).then(existingWorkout => {
            console.log(existingWorkout);
            // const newTotal = req.body.duration + existingWorkout.totalDuration;
            Workout.updateOne(
                { id: id }, 
                { $push: { exercises: req.body } }
            )
            .then(newWorkout => {
                console.log(newWorkout);
                res.json(newWorkout);
            })
            .catch(err => {
                res.status(400).json(err);
            });
        })   
    });
    
    app.get("/api/workouts/range", (req, res) => {
        Workout.find({})
            .then(dbWorkout => {
                res.json(dbWorkout);
            })
            .catch(err => {
                res.status(400).json(err);
            });
    });    
}
