import { useNavigate } from "react-router-dom"
import { NavButton } from "../Styles/NavStyles"

const AllNavButtons = () => {

    let navigate = useNavigate()

    const handleHomePressed = () => {navigate("/")}
    const handleWholesalePressed = () => {navigate("/about")}

    return (
        <ul>
            <NavButton onClick={handleHomePressed}>Todos</NavButton>
            <NavButton onClick={handleWholesalePressed}>About</NavButton>
        </ul>
    )
}

export default AllNavButtons