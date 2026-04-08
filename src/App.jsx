
import { Routes, Route } from "react-router-dom"
import Navbar from "./components/NavBar"
import Home from "./pages/Home"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Login from "./pages/Login"
import ErrorBoundary from "./ErrorBoundary/ErrorBoundary"

function App() {
  return(
    <>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<ErrorBoundary><Home/></ErrorBoundary>}/>
        <Route path="about" element={<ErrorBoundary><About/></ErrorBoundary>}/>
        <Route path="contact" element={<ErrorBoundary><Contact/></ErrorBoundary>}/>
        <Route path="login" element={<ErrorBoundary><Login/></ErrorBoundary>}/>
      </Routes>

    </>
  )
}
export default App;