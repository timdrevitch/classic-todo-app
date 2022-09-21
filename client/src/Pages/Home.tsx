import { FC } from "react"
import Navbar from "../Components/Navbar"
import Todos from "../Components/Todos"

const Home: FC = (): JSX.Element => {
  return (
    <div style={{ width: "100%", textAlign: "center" }}>
      <Navbar />
      <div style={{ margin: "2rem auto" }}>Welcome to the Classic Todo App</div>
      <Todos />
    </div>
  )
}

export default Home
