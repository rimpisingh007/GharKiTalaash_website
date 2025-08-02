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
import { ToastContainer } from "react-toastify"
import AdminLayout from "./components/Layouts/AdminLayout"
import Addcity from "./components/Adminpages/Addcity"
import ManageBookings from "./components/Adminpages/ManageBookings"

import ManageCity from "./components/Adminpages/Managecity"
import ManagePG from "./components/Adminpages/ManagePG"
import ManagePGOwners from "./components/Adminpages/ManagePGOwners"
import ManageUsers from "./components/Adminpages/ManageUsers"
import PGOwnerLayout from "./components/Layouts/PGOwnerLayout"
import Addproperty from "./components/Pgownerpages/Addproperty"
import ManageProperty from "./components/Pgownerpages/ManageProperty"
import ManageBooking from "./components/Pgownerpages/ManageBooking"
import UserRegister from "./components/auth/UserRegister"
import PGRegister from "./components/auth/PGRegister"
import AdminDashboard from "./components/Adminpages/AdminDashboard"
import UpdateCity from "./components/Adminpages/UpdateCity"
import Dashboard from "./components/Pgownerpages/Dashboard"


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="About" element={<About />} />
            <Route path="Agents" element={<Agents />} />
            <Route path="Contact" element={<Contact />} />
            <Route path="Properties" element={<Properties />} />
            <Route path="Propertysingle" element={<Propertysingle />} />
            <Route path="Servicedetails" element={<Servicedetails />} />
            <Route path="Services" element={<Services />} />
            <Route path="Starterpage" element={<Starterpage />} />
            <Route path="Login" element={<Login />} />
            <Route path="register/user" element={<UserRegister />} />
            <Route path="register/pgowner" element={<PGRegister />} />
          </Route>

          {/* Admin routes*/}
          <Route path="/admin" element={<AdminLayout />} >
            <Route index element= {<AdminDashboard/>}/>
            <Route path="city/add" element={<Addcity />} />
            <Route path="city/manage" element={<ManageCity />} />
            <Route path="city/edit/:id" element ={<UpdateCity/>}/>
            <Route path="managebookings" element={<ManageBookings />} />
            <Route path="managepg" element={<ManagePG />} />
            <Route path="managepgowners" element={<ManagePGOwners />} />
            <Route path="manageusers" element={<ManageUsers />} />
          

          </Route>
           {/* PG owner routes  */}

          <Route path="/pgowner" element={<PGOwnerLayout />} >
          <Route index element = {<Dashboard/>} />
            <Route path="addproperty" element={<Addproperty />} />
            <Route path="manageproperty" element={<ManageProperty />} />
            <Route path="managebooking" element={<ManageBooking />} />
          </Route> 

          <Route path="/*" element={<Error />} />

        </Routes>
      </BrowserRouter >
      <ToastContainer />

    </>
  )
}
export default App