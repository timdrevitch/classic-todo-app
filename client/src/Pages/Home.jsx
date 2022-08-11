import CreateTodo from "../Components/CreateTodo"
import Todos from "../Components/Todos"

const Home = () => {

    return (
        <div style={{width: "100%", textAlign: "center", marginTop: "5rem"}}>
            Welcome to the Classic Todo App
            <Todos/>
            <CreateTodo/>
        </div>
    )
}

export default Home