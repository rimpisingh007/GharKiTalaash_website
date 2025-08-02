import { Link, useNavigate } from "react-router-dom"
import { toast } from "react-toastify"
import Swal from "sweetalert2"
export default function PGOwnerHeader(){
    let isLogin=sessionStorage.getItem("isLogin")
     let name = sessionStorage.getItem("name")
    const nav=useNavigate()
    ///sweetalert2
    const logout=()=>{

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
    return(
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
             {/* <li>
                <Link to="/Dashboard">
                  Dashboard
                </Link>
              </li>*/}
              <li>
                <Link to="/addproperty">
                  Add Property
                </Link>
              </li>
              <li>
                <Link to="/managebooking">
                  Manage Booking
                </Link>
              </li>
              <li>
                <Link to="/manageproperty">
                  Manage Property
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