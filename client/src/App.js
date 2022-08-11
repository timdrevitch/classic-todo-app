import { useState } from "react"
import { Context } from "./Context"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Home from "./Pages/Home"

const App = () => {
    const [url, setUrl] = useState("http://localhost:4000") // https://classictodoapp.herokuapp.com || http://localhost:4000
    const [themeGreen, setThemeGreen] = useState("#5fc75d")
    const [themeLightBlue, setThemeLightBlue] = useState("#36868f")

    return (
        <Router>
            <Context.Provider value={{
                  url, setUrl,
                  themeGreen, setThemeGreen,
                  themeLightBlue, setThemeLightBlue
                }}>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                </Routes>
            </Context.Provider>
        </Router>
    )
}

export default App
