import { BrowserRouter, Route, Routes } from "react-router-dom"
import Layout from "./components/Layouts/Layout"
import Home from "./components/pages/Home"
import About from "./components/pages/About"
import Agents from "./components/pages/Agents"
import Contact from "./components/pages/Contact"
import Propertysingle from "./components/pages/Propertysingle"
import Servicedetails from "./components/pages/Servicedetails"
import Services from "./components/pages/Services"
import Starterpage from "./components/pages/Starterpage"
import Properties from "./components/pages/Properties"
import Login from "./components/auth/login"
import Game from "./components/pages/Game"
import Register from "./components/auth/Register"

{/*import Login from "./components/auth/login"
import Register from "./components/auth/register"*/}


function App() {
  return (
    <>
      {/* <Login />
      <Register /> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>

            <Route index element={<Home />} />
            <Route path="About" element={<About />} />
            <Route path="Agents" element={<Agents />} />
            <Route path="Contact" element={<Contact />} />
            <Route path="Properties" element={<Properties/>} />
            <Route path="Propertysingle" element={<Propertysingle />} />
            <Route path="Servicedetails" element={<Servicedetails />} />
            <Route path="Services" element={<Services />} />
            <Route path="Starterpage" element={<Starterpage />} />
            <Route path="Login" element ={<Login/>}/>
            <Route path="Register" element={<Register/>}/>

          </Route>
          <Route path="/game" element={<Game/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}
export default App