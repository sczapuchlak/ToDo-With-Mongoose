var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Define your schema - what fields will a Task object have?
var taskSchema = new Schema({
    text: String,
    completed: Boolean
});

//Compile taskSchema into mongoose model, whose name will be 'Task'.
var Task = mongoose.model('Task', taskSchema);

//And export the Task so it can be used by other parts of your code.
module.exports = Task;``