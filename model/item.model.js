const mongoose = require('mongoose')
const cate = new mongoose.Schema({
    type:String,
    required:true
});
const todoItemSchema = new mongoose.Schema({
category:[cate],
item:{
    type:String,
    required:true
}
});

module.exports = Todo = mongoose.model("Todo",todoItemSchema)