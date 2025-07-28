import { signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { auth, db } from "../../Firebase";
import { doc, getDoc } from "firebase/firestore";

export default function Login() {
  const [email, setEmail] = useState("admin@gmail.com")
  const [password, setPassword] = useState("123456")
  const changeEmail = (event) => {
    setEmail(event.target.value)
  }

  // let nav = useNavigate()
  // const handleForm = (e) => {
  // e.preventDefault()
  // signInWithEmailAndPassword(auth, email, password)
  // .then((userCred) => {
  // console.log("sign in", userCred.user.uid);
  // getUserData(userCred.user.uid)
  // toast.success("Login successfully!!")
  // setTimeout(()=>{
  //   nav("/")
  // },3000)
  // nav("/")
  // })
  // .catch((error) => {
  // toast.error(error.message);
  // })
  // }
  let nav = useNavigate() //hook which redirect from one page to other
  const handleForm = (e) => {
    e.preventDefault() //stops form from reloading
    signInWithEmailAndPassword(auth, email, password)
      .then((userCred) => {
        // console.log("sign in", userCred.user.uid);
        let userId = userCred.user.uid
        getUserData(userId)
      })
      .catch((error) => {
        toast.error(error.message);
      })
  }



  const getUserData = async (userId) => {
    // console.log(userId);
    let userDoc = await getDoc(doc(db, "users", userId))
    console.log("userDatais", userDoc.data());
    let userData = userDoc.data()
    sessionStorage.setItem("name", userData?.name)
    sessionStorage.setItem("email", userData?.email)
    sessionStorage.setItem("userType", userData?.userType)
    sessionStorage.setItem("userId", userId)
    sessionStorage.setItem("isLogin", true)
    toast.success("Login successfully")
      if(userData?.userType==1){
      nav("/admin")
      }else{
       nav("/")
     }
  }


  const signInGoogle = () => {
    let provider = new GoogleAuthProvider()
    signInWithPopup(auth, provider)
      .then((userCred) => {
        console.log(userCred.user.uid);
        toast.success("Login successfully")
        sessionStorage.setItem("isLogin", "true");
        setTimeout(() => {
          nav("/");
        }, 2000)
        // nav("/")
      })
      .catch((err) => {
        toast.error(err.message)
      })
  }


  return (
    <>
      <ToastContainer />
      <section
        className="hero-wrap hero-wrap-2"
        style={{
          backgroundImage: 'url("/assets/images/bg_2.jpg")',
          height: "220px",
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "relative",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#fff",
          textAlign: "center",
        }}
      >
        <div
          className="overlay"
          style={{
            position: "absolute",
            inset: 0,
            backgroundColor: "rgba(0, 0, 0, 1)",
          }}
        />
        <div className="container" style={{ position: "relative", zIndex: 2 }}>
          <div className="row no-gutters slider-text align-items-end">
            <div className="col-md-9 ftco-animate pb-5">
              <p className="breadcrumbs mb-2" style={{ fontSize: "14px" }}>
                <span className="mr-2">
                  <a href="index.html" style={{ color: "#fff", textDecoration: "none" }}>
                    Home <i className="ion-ios-arrow-forward" />
                  </a>
                </span>{" "}
                <span>
                  Login <i className="ion-ios-arrow-forward" />
                </span>
              </p>
              <h1 className="mb-0 bread" style={{ fontSize: "36px", fontWeight: "600" }}>
                Login to the website
              </h1>
            </div>
          </div>
        </div>
      </section>

      <div className="container my-5" style={{ maxWidth: "960px", margin: "50px auto" }}>
        <div className="row no-gutters" style={{ display: "flex", gap: "20px" }}>
          <div className="col-md-7" style={{ flex: "1" }}>
            <div
              className="contact-wrap w-100 p-md-5 p-4"
              style={{
                background: "#fff",
                padding: "30px",
                borderRadius: "8px",
                boxShadow: "0 6px 18px rgba(0,0,0,0.08)",
              }}
            >
              <h3 className="mb-4" style={{ fontSize: "26px", marginBottom: "20px" }}>
                Login
              </h3>
              <form
                method="POST"
                id="contactForm"
                name="contactForm"
                className="contactForm"
                onSubmit={handleForm}
              >
                <div className="row" style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
                  <div className="col-md-12">
                    <div className="form-group" style={{ display: "flex", flexDirection: "column" }}>
                      <label className="label" htmlFor="email" style={{ marginBottom: "6px" }}>
                        Email Address
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        name="email"
                        id="email"
                        placeholder="Email"
                        value={email}
                        onChange={changeEmail}
                        style={{
                          padding: "12px",
                          fontSize: "16px",
                          border: "1px solid #ccc",
                          borderRadius: "6px",
                        }}
                      />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="form-group" style={{ display: "flex", flexDirection: "column" }}>
                      <label className="label" htmlFor="subject" style={{ marginBottom: "6px" }}>
                        Password
                      </label>
                      <input
                        type="password"
                        className="form-control"
                        name="subject"
                        id="subject"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => {
                          setPassword(e.target.value);
                        }}
                        style={{
                          padding: "12px",
                          fontSize: "16px",
                          border: "1px solid #ccc",
                          borderRadius: "6px",
                        }}
                      />
                    </div>
                  </div>

                  <div className="col-md-12">
                    <div className="form-group">
                      <input
                        type="submit"
                        defaultValue="Submit"
                        className="btn btn-primary"
                        style={{
                          background: "#007bff",
                          border: "none",
                          color: "#fff",
                          padding: "12px 24px",
                          borderRadius: "6px",
                          cursor: "pointer",
                        }}
                      />
                      <div className="submitting" />
                    </div>
                  </div>
                </div>
              </form>
              <button
                type="button"
                onClick={signInGoogle}
                className="btn btn-danger"
                style={{
                  background: "#db4437",
                  border: "none",
                  color: "#fff",
                  padding: "12px 24px",
                  borderRadius: "6px",
                  cursor: "pointer",
                  marginTop: "15px",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                }}
              >
                <i className="bi bi-google" /> Sign In with Google
              </button>
              <div style={{ marginTop: "20px", fontSize: "14px" }}>
                Don't have an Account?{" "}
                <Link to={"/Register"} style={{ color: "#007bff", textDecoration: "none" }}>
                  Register
                </Link>

              </div>
            </div>
          </div>
          <div className="col-md-5 d-flex align-items-stretch" style={{ flex: "1" }}>
            <div
              className="info-wrap w-100 p-5 img"
              style={{
                backgroundImage: "url(/assets/images/img.jpg)",
                backgroundSize: "cover",
                backgroundPosition: "center",
                borderRadius: "8px",
                minHeight: "300px",
              }}
            ></div>
          </div>
        </div>
      </div>
    </>
  )
}