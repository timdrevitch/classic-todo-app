const router = require("express").Router()

let Todo = require("../Models/todosModel")

//Find all todos
router.route("/gettodos").get((req, res) => {
    Todo.find()
        .sort({_id: -1})
        .then(Todo => res.json(Todo))
        .catch(err => res.status(400).json("Error: " + err))
})

//Delete todo
router.route("/removetodo/:id").delete((req, res) => {
    Todo.findByIdAndDelete({_id: req.params.id})
        .then(res.json("Todo deleted"))
        .catch(err => res.status(400).json("Error: " + err))
})

//Complete todo
router.route("/completetodo/:id").put((req, res) => {
    Todo.updateOne({_id: req.params.id}, {$set:{isDone: true}})
        .then(() => res.json("Todo completed"))
        .catch(err => res.status(400).json("Error: " + err))
})

//Create new todo
router.route("/createtodo").post((req, res) => {
    const todo = req.body.todo
    const author = req.body.author
    const dueDate = req.body.dueDate
    const isDone = false
    const newTodo = new Todo({
        todo,
        author,
        dueDate,
        isDone
    })
    newTodo.save()//save todo to db
        .then((Todo) => res.json(Todo))
        .catch(err => res.status(400).json("Error: " + err))
})

module.exports = router