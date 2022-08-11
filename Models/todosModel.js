//this is the schema/collection model for MongoDB Atlas
const mongoose = require("mongoose")

const todosSchema = new mongoose.Schema({
    todo: {
        type: String,
        trim: true,
    },
    dueDate: {
        type: String,
        trim: true,
    },
    author: {
        type: String,
        trim: true,
    },
    isDone: {
        type: Boolean,
        trim: true,
    },
}, {timestamps: true}
)

module.exports = mongoose.model("Todo", todosSchema)
