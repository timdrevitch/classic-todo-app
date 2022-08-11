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

    return (
        <div style={{width: "65%", margin: "2rem auto", border: "1px solid black", borderRadius: "10px", padding: "2rem", backgroundColor: "#282c34"}}>
            <h1>Todos</h1>
            {todos.map((todo, index) => (
                <div key={index}>
                    <div>Todo: <span style={{color: "green"}}>{todo.todo}</span></div>
                    <div>Author: <span style={{color: "green"}}>{todo.author}</span></div>
                    <div>Due Date: <span style={{color: "green"}}>{todo.dueDate}</span></div>
                    <button style={{backgroundColor: "darkred", color: "white", border: "none", borderRadius: "3px"}}>Remove</button>
                </div>
            ))}
            <br/>
            <button onClick={createNewTodo} style={{backgroundColor: "darkgreen", color: "white", border: "none", borderRadius: "3px"}}>Create Todo</button>
        </div>
    )
}

export default Todos