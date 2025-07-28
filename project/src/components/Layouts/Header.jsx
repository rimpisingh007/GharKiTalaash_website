import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Swal from "sweetalert2";

function Header() {
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
              {/*} <li>
                <Link to="/Login">Login</Link>
              </li>*/}
              <li>
                <Link to="/" >
                  Home
                </Link>
              </li>
              <li>
                <Link to="/About">About</Link>
              </li>
              <li>
                <Link to="/Services">Services</Link>
              </li>
              <li>
                <Link to="/Properties">Properties</Link>
              </li>
              <li>
                <Link to="/Agents">Agents</Link>
              </li>
              <li>
                <Link to="/Contact">Contact</Link>
              </li>
              <li className="dropdown">
                <a href="#">
                  <span>Register</span>{" "}
                  <i className="bi bi-chevron-down toggle-dropdown" />
                </a>
                <ul>
                  <li>
                    <Link to="/register/user">
                      Register as a user
                    </Link>
                  </li>
                  <li>
                    <Link to="/register/pgowner">
                      Register as a PG Owner
                    </Link>
                  </li>
                </ul>
              </li>
              {/*  <li className="dropdown">
                <a href="#">
                  <span>Dropdown</span>{" "}
                  <i className="bi bi-chevron-down toggle-dropdown" />
                </a>
                <ul>
                  <li>
                    <a href="#">Dropdown 1</a>
                  </li>
                  <li className="dropdown">
                    <a href="#">
                      <span>Deep Dropdown</span>{" "}
                      <i className="bi bi-chevron-down toggle-dropdown" />
                    </a>
                    <ul>
                      <li>
                        <a href="#">Deep Dropdown 1</a>
                      </li>
                      <li>
                        <a href="#">Deep Dropdown 2</a>
                      </li>
                      <li>
                        <a href="#">Deep Dropdown 3</a>
                      </li>
                      <li>
                        <a href="#">Deep Dropdown 4</a>
                      </li>
                      <li>
                        <a href="#">Deep Dropdown 5</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="#">Dropdown 2</a>
                  </li>
                  <li>
                    <a href="#">Dropdown 3</a>
                  </li>
                  <li>
                    <a href="#">Dropdown 4</a>
                  </li>
                </ul>
              </li>
              */}
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
export default Header