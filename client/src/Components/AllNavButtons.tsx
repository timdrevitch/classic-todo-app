import { FC } from "react"
import { NavigateFunction, useNavigate } from "react-router-dom"
import { NavButton } from "../Styles/NavStyles"

const AllNavButtons: FC = (): JSX.Element => {
  let navigate: NavigateFunction = useNavigate()

  return (
    <ul>
      <NavButton onClick={() => navigate("/")}>Todos</NavButton>
      <NavButton onClick={() => navigate("/about")}>About</NavButton>
    </ul>
  )
}

export default AllNavButtons
