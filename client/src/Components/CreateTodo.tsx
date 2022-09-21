import axios from "axios"
import { ChangeEvent, FC, useContext, useState } from "react"
import { Context } from "../Context"
import { ITodo } from "../Interfaces/ITodo"

const CreateTodo: FC = (): JSX.Element => {
  const { url, setIfCreationFormIsOpen } = useContext(Context)

  const [todo, setTodo] = useState<string>("")
  const [author, setAuthor] = useState<string>("")
  const [dueDate, setDueDate] = useState<string>("")

  const createNewTodo = () => {
    let data: ITodo = { todo: todo, author: author, dueDate: dueDate }
    axios
      .post(`${url}/createtodo`, data)
      .then((response) => console.log(response.data))
      .catch((err) => console.log(err))
      .then(() => setIfCreationFormIsOpen(false))
  }

  return (
    <div
      style={{
        backgroundColor: "#1a1d22",
        border: "1px solid black",
        borderRadius: "10px",
        margin: "5rem 10px 0 10px",
      }}
    >
      <form onSubmit={createNewTodo}>
        <label>Todo: </label>
        <input
          type="text"
          name="todo"
          value={todo}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setTodo(e.target.value)
          }
          required
        />
        <br />
        <label>Author: </label>
        <input
          type="text"
          name="author"
          value={author}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setAuthor(e.target.value)
          }
          required
        />
        <br />
        <label>Due: </label>
        <input
          type="date"
          name="due"
          value={dueDate}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setDueDate(e.target.value)
          }
          required
        />
        <br />
        <button
          onClick={() => setIfCreationFormIsOpen(false)}
          style={{
            cursor: "pointer",
            display: "inline-block",
            backgroundColor: "darkred",
            color: "white",
            border: "none",
            borderRadius: "3px",
            padding: ".5rem 1rem",
            margin: "1rem",
            fontFamily: "Trebuchet MS, sans-serif",
          }}
        >
          Cancel
        </button>
        <input
          type="submit"
          value="Submit new task"
          style={{
            cursor: "pointer",
            display: "inline-block",
            backgroundColor: "green",
            color: "white",
            border: "none",
            borderRadius: "3px",
            padding: ".5rem 1rem",
            margin: "1rem",
            fontFamily: "Trebuchet MS, sans-serif",
          }}
        />
      </form>
    </div>
  )
}

export default CreateTodo
