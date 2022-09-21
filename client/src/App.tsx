import { FC, useState } from "react"
import { Context } from "./Context"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Home from "./Pages/Home"
import About from "./Pages/About"

const App: FC = (): JSX.Element => {
  const [url, setUrl] = useState<string>("http://localhost:4000/api") // https://classictodoapp.herokuapp.com || http://localhost:4000
  const [themeGreen, setThemeGreen] = useState<string>("#5fc75d")
  const [themeLightBlue, setThemeLightBlue] = useState<string>("#36868f")
  const [ifCreationFormIsOpen, setIfCreationFormIsOpen] =
    useState<boolean>(false)

  return (
    <Router>
      <Context.Provider
        value={{
          url,
          setUrl,
          themeGreen,
          setThemeGreen,
          themeLightBlue,
          setThemeLightBlue,
          ifCreationFormIsOpen,
          setIfCreationFormIsOpen,
        }}
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Context.Provider>
    </Router>
  )
}

export default App
