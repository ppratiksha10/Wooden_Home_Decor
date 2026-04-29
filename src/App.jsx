
import { Routes, Route } from "react-router-dom"
import Navbar from "./components/NavBar"
import Home from "./pages/Home"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Login from "./pages/Login"
import ErrorBoundary from "./ErrorBoundary/ErrorBoundary"
import Dashboard from "./pages/Dashboard"
import Profile from "./components/Profile"
import useCounter from "./customhooks/customehook"
import ApiCall from "./services/ApiCustome"

function App() {
  const { count, inc, dec } = useCounter();
  return(
    <>
      <Navbar></Navbar>
      <Profile></Profile>
      <Routes>
        <Route path="/" element={<ErrorBoundary><Home/></ErrorBoundary>}/>
        <Route path="about" element={<ErrorBoundary><About/></ErrorBoundary>}/>
        <Route path="contact" element={<ErrorBoundary><Contact/></ErrorBoundary>}/>
        <Route path="login" element={<ErrorBoundary><Login/></ErrorBoundary>}/>
        <Route path="/dashboard" element={<ErrorBoundary><Dashboard /></ErrorBoundary>} />
      </Routes>

      <h1>{count}</h1>
      <button onClick={inc} style={{ background: "red", width:"60px" }}>+</button>
      <button onClick={dec}>-</button>
      <ApiCall></ApiCall>
    </>
  )
}
export default App;