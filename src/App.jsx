import { Route, BrowserRouter as Router, Routes } from "react-router-dom"
import Signin from "./auth/Signin"
import Signup from "./auth/Signup"
import HomePage from "./components/HomePage"
import LandingPage from "./components/LandingPage"
// import UserLayout from "./Layout/UserLayout"
function App() {

  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/Signin" element={<Signin/>} />
        <Route path="/Signup" element={<Signup/>}/>
        {/* <Route path="/userLayout" element={<UserLayout/>}> */}
        <Route path="/HomePage" element={<HomePage/>}/>
        {/* </Route> */}
      </Routes>
    </Router>
    </>
  )
}

export default App
