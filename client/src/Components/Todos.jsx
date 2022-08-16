import axios from "axios"
import { useContext, useEffect, useState } from "react"
import { Context } from "../Context"
import { CompleteTodoButton, CreateTodoButton, DeleteTodoButton,
FullTodosContainer, GreenSpan, RedSpan, TodoItem, TodosContainer,
TodosInfo, TodosTitle, TodosTitleContainer } from "../Styles/HomeStyles"
import CreateTodo from "./CreateTodo"

const Todos = () => {

    const {url, ifCreationFormIsOpen, setIfCreationFormIsOpen} = useContext(Context)
    const [todos, setTodos] = useState([])

    useEffect(() => {
        const cancelToken = axios.CancelToken.source()
        axios.get(`${url}/gettodos`, {cancelToken: cancelToken.token})
            .then(response => setTodos(response.data))
            .catch(error => {
                if (axios.isCancel(error)) {
                    console.log("Get request cancelled.")
                }
                else {
                    console.log(error)
                }
            })
        return () => cancelToken.cancel()
    })

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

    const openCreationForm = () => {
        setIfCreationFormIsOpen(true)
        console.log(ifCreationFormIsOpen)
    }

    return (
        <FullTodosContainer>
            <TodosTitleContainer>
                <TodosTitle>Todos</TodosTitle>
                <CreateTodoButton onClick={openCreationForm}>Create Task</CreateTodoButton>
            </TodosTitleContainer>
            {ifCreationFormIsOpen && <CreateTodo/>}
            <TodosContainer>
                {todos.map((todo, index) => (
                    <TodosInfo key={index}>
                        <TodoItem><h5>Task: <GreenSpan>{todo.todo}</GreenSpan></h5></TodoItem>
                        <TodoItem><h5>Author: <GreenSpan>{todo.author}</GreenSpan></h5></TodoItem>
                        <TodoItem><h5>Due: <GreenSpan>{todo.dueDate}</GreenSpan></h5></TodoItem>
                        <TodoItem><h5>Done: <GreenSpan>{todo.isDone ? "yes" : <RedSpan>no</RedSpan>}</GreenSpan></h5></TodoItem>
                        <DeleteTodoButton onClick={() => removeTodo(todo._id)}>Remove</DeleteTodoButton>
                        <CompleteTodoButton onClick={() => completeTodo(todo._id)}>Mark task as complete</CompleteTodoButton>
                    </TodosInfo>
                ))}
            </TodosContainer>
            <br/>
        </FullTodosContainer>
    )
}

export default Todos