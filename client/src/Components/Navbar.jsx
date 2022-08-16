import {HiMenu} from "react-icons/hi"
import {useState} from "react"
import { FullNavbarContainer, MenuCloseButton, MenuContainer, NavButtonContainer, NavElementsContainer, NavHamburgerButton, NavHamburgerMenu, NavImage, NavImageContainer } from "../Styles/NavStyles"
import AllNavButtons from "./AllNavButtons"

const Navbar = () => {

    //state (1)
    const [menu, setMenu] = useState(false)

    //functions (2)
    const openMenu = () => {setMenu(true)}
    const closeMenu = () => {setMenu(false)}
    
    return (
        <FullNavbarContainer>
            <NavElementsContainer>
                <NavImageContainer>
                    <h2>Classic Todo App</h2>
                </NavImageContainer>
                <NavButtonContainer>
                    <AllNavButtons/>
                </NavButtonContainer>
                <NavHamburgerMenu>
                    <NavHamburgerButton onClick={openMenu}>
                        <HiMenu size="30"/>
                    </NavHamburgerButton>
                </NavHamburgerMenu>
            </NavElementsContainer>
            {menu ? (
                <MenuContainer>
                    <MenuCloseButton onClick={closeMenu}>
                        &#10006;
                    </MenuCloseButton>
                    <AllNavButtons/>
                </MenuContainer>
            ) : (null)}
        </FullNavbarContainer>
    )
}

export default Navbar