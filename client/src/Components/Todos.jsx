import axios from "axios"
import { useContext, useEffect, useState } from "react"
import { Context } from "../Context"

const Todos = () => {

    const {url} = useContext(Context)
    const [todos, setTodos] = useState([])

    useEffect(() => {
        axios.get(`${url}/gettodos`)
            .then(response => setTodos(response.data))
            .catch(err => console.log(err))
    })

    const createNewTodo = () => {
        axios.post(`${url}/createtodo`)
            .then(response => console.log(response))
            .catch(err => console.log(err))
    }

    const removeTodo = (id) => {
        axios.delete(`${url}/removetodo/${id}`)
            .then(response => console.log(response))
            .catch(err => console.log(err))
    }

    const completeTodo = (id) => {
        axios.put(`${url}/completetodo/${id}`)
            .then(response => console.log(response))
            .catch(err => console.log(err))
    }

    return (
        <div style={{width: "65%", margin: "10px auto", border: "1px solid black", borderRadius: "10px", padding: "2rem", backgroundColor: "#282c34"}}>
            <div style={{position: "absolute", width: "65%"}}>
                <h1 style={{display: "inline-block", float: "left", margin: "10px"}}>Todos</h1>
                <button onClick={createNewTodo} style={{cursor: "pointer", display: "inline-block", backgroundColor: "darkgreen", color: "white", border: "none", borderRadius: "5px", padding: "1rem 2rem", float: "right", margin: "10px"}}>Create Task</button>
            </div>
            <div style={{marginTop: "5rem"}}>
            {todos.map((todo, index) => (
                <div key={index} style={{backgroundColor: "#1a1d22", border: "1px solid black", borderRadius: "10px", margin: "10px"}}>
                    <div style={{display: "inline-block", margin: "1rem"}}><h5>Task: <span style={{color: "green"}}>{todo.todo}</span></h5></div>
                    <div style={{display: "inline-block", margin: "1rem"}}><h5>Author: <span style={{color: "green"}}>{todo.author}</span></h5></div>
                    <div style={{display: "inline-block", margin: "1rem"}}><h5>Due: <span style={{color: "green"}}>{todo.dueDate}</span></h5></div>
                    <div style={{display: "inline-block", margin: "1rem"}}><h5>Done: <span style={{color: "green"}}>{todo.isDone ? "yes" : <span style={{color: "red"}}>no</span>}</span></h5></div>
                    <button onClick={() => removeTodo(todo._id)} style={{cursor: "pointer", display: "inline-block", backgroundColor: "darkred", color: "white", border: "none", borderRadius: "3px", padding: ".5rem 1rem", margin: "1rem", fontFamily: "Trebuchet MS, sans-serif"}}>Remove</button>
                    <button onClick={() => completeTodo(todo._id)} style={{cursor: "pointer", display: "inline-block", backgroundColor: "green", color: "white", border: "none", borderRadius: "3px", padding: ".5rem 1rem", margin: "1rem", fontFamily: "Trebuchet MS, sans-serif"}}>Mark task as complete</button>
                </div>
            ))}
            </div>
            <br/>
        </div>
    )
}

export default Todos