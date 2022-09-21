import { HiMenu } from "react-icons/hi"
import { FC, useState } from "react"
import {
  FullNavbarContainer,
  MenuCloseButton,
  MenuContainer,
  NavButtonContainer,
  NavElementsContainer,
  NavHamburgerButton,
  NavHamburgerMenu,
  NavImageContainer,
} from "../Styles/NavStyles"
import AllNavButtons from "./AllNavButtons"

const Navbar: FC = (): JSX.Element => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false)

  return (
    <FullNavbarContainer>
      <NavElementsContainer>
        <NavImageContainer>
          <h2>Classic Todo App</h2>
        </NavImageContainer>
        <NavButtonContainer>
          <AllNavButtons />
        </NavButtonContainer>
        <NavHamburgerMenu>
          <NavHamburgerButton onClick={() => setMenuOpen(true)}>
            <HiMenu size="30" />
          </NavHamburgerButton>
        </NavHamburgerMenu>
      </NavElementsContainer>
      {menuOpen && (
        <MenuContainer>
          <MenuCloseButton onClick={() => setMenuOpen(false)}>
            &#10006;
          </MenuCloseButton>
          <AllNavButtons />
        </MenuContainer>
      )}
    </FullNavbarContainer>
  )
}

export default Navbar
