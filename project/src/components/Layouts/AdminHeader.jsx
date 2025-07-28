import { Link, useNavigate } from "react-router-dom"
import { toast } from "react-toastify"
import Swal from "sweetalert2"


export default function AdminHeader() {
   let isLogin = sessionStorage.getItem("isLogin")
    let name = sessionStorage.getItem("name")
    const nav = useNavigate()
    ///sweetalert2
    const logout = () => {
  
      Swal.fire({
        title: "Are you sure you want to logout?",
        // text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, Logout!"
      }).then((result) => {
        if (result.isConfirmed) {
          sessionStorage.clear()
          nav("/login")
          Swal.fire({
            title: "Logout!",
            text: "Logout successfully.",
            icon: "success"
          });
        }
      });
    }


  return (
    <>
       <header id="header" className="header d-flex align-items-center fixed-top">
        <div className="container-fluid container-xl position-relative d-flex align-items-center justify-content-between">
          <a href="index.html" className="logo d-flex align-items-center">
            {/* Uncomment the line below if you also wish to use an image logo */}
            {/* <img src="assets/img/logo.png" alt=""> */}
            <h1 className="sitename">
              GharKiTalaash

            </h1>
          </a>
          <nav id="navmenu" className="navmenu">
            <ul>
              <li className="dropdown">
                <a href="#">
                  <span>City</span>{" "}
                  <i className="bi bi-chevron-down toggle-dropdown" />
                </a>
                <ul>
                  <li>
                    <Link to="admin/city/add">
                      Add city
                    </Link>
                  </li>
                  <li>
                    <Link to="admin/city/manage">
                      Manage city
                    </Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link to="/ManageBookings">
                  Manage Bookings
                </Link>
              </li>
              <li>
                <Link to="/ManagePG">
                  Manage PG
                </Link>
              </li>
              <li>
                <Link to="/ManagePGOwners">
                  Manage PG Owners
                </Link>
              </li>
              <li>
                <Link to="/ManageUsers">
                  Manage Users
                </Link>
              </li>
              {
                isLogin ?
                  <li className="nav-item">
                  <Link onClick={logout} className="nav-link">
                    Logout {name}
                  </Link>
                </li>
                :
                <li className="nav-item">
                  <Link to={"/login"} className="nav-link">
                    Login
                  </Link>
                </li>
            }
            </ul>
            <i className="mobile-nav-toggle d-xl-none bi bi-list" />
          </nav>
        </div>
      </header>
    </>
  )
}