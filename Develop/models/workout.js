
// require in mongoose
const mongoose = require('mongoose')
//create new mongoose schema with day and exercises value types into json
const schema = new mongoose.Schema({
    day: {type: Date, default: Date.now },
    exercises: [{
        type: { type: String, trim: true },
        name: { type: String, trim: true },
        distance: Number,
        duration: Number,
        weight: Number,
        sets: Number,
        reps: Number}]
}, { toJSON: { virtuals: true }})
// create function to get schema attached to total duration 
schema.virtual('totalDuration').get(function() {
    let totalDuration = 0
    for (const exercise of this.exercises)
     { totalDuration += exercise.duration }
    console.log(totalDuration)
    return totalDuration})
const Workout = mongoose.model('Workouts', schema)
module.exports = Workout