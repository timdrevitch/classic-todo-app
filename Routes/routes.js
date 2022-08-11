const router = require("express").Router()

let Todo = require("../Models/todosModel")

//Find all todos
router.route("/gettodos").get((req, res) => {
    Todo.find()
        .then(Todo => res.json(Todo))
        .catch(err => res.status(400).json("Error: " + err))
})

//Create new todo
router.route("/createtodo").post((req, res) => {
    const todo = "test todo"
    const dueDate = "today"
    const author = "Tim Drevitch"
    const isDone = false

    const newTodo = new Todo({
        todo,
        dueDate,
        author,
        isDone
    })
    newTodo.save()//save todo to db
        .then((Todo) => res.json(Todo))
        .catch(err => res.status(400).json("Error: " + err))
})

module.exports = router