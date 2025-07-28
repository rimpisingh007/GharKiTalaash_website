import { createUserWithEmailAndPassword } from "firebase/auth"
import { useState } from "react"
import { auth, db } from "../../Firebase"
import { toast } from "react-toastify"
import { doc, setDoc, Timestamp } from "firebase/firestore"

export default function UserRegister() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [contact, setContact] = useState("")
  const handleForm = (e) => {
    e.preventDefault()
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCred) => {
        let userId = userCred.user.uid
        console.log(userId);
        
        saveData(userId)
      })
      .catch((err) => {
        toast.error(err.message)
      })
  }

  const saveData = async (userId) => {
    try {
      let data = {
        name: name,
        email: email,
        contact: contact,
        userId: userId,
        userType: 3,
        status: true,
        createdAt: Timestamp.now()
      }
      // console.log(data);
      //  setDoc(doc(db, collectionName, id), data)
      await setDoc(doc(db, "users", userId), data)
      toast.success("Register successfully!!")
    }
    catch(err) {
      toast.error(err.message)
    }
  }

  return (
    <>
      <section
        className="hero-wrap hero-wrap-2"
        style={{
          backgroundImage: 'url("https://api.oneworld.id/uploads/Real_Estate_i_Stock_edited_aae30f2583.jpg")',
          height: "250px",
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "relative",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          color: "#fff",
        }}
        data-stellar-background-ratio="0.5"
      >
        <div
          className="overlay"
          style={{
            position: "absolute",
            inset: 0,
            backgroundColor: "rgba(0,0,0,0.55)",
          }}
        />
        <div
          className="container"
          style={{
            position: "relative",
            zIndex: 2,
          }}
        >
          <h1
            className="mb-0 bread"
            style={{
              fontSize: "36px",
              fontWeight: "600",
              margin: "40px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100%", 
              textAlign: "center",
              width: "100%", 
            }}
          >
            Register home seekers!
          </h1>

        </div>
      </section>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "80vh", 
          backgroundColor: "#f8f9fa",
          padding: "20px",
        }}
      >
        <div
          className="contact-wrap"
          style={{
            background: "#fff",
            padding: "30px",
            borderRadius: "10px",
            boxShadow: "0 6px 18px rgba(0,0,0,0.08)",
            width: "100%",
            maxWidth: "500px",
          }}
        >
          <h3
            className="mb-4"
            style={{ marginBottom: "20px", fontSize: "26px", fontWeight: "600", textAlign: "center" }}
          >
            Register
          </h3>
          <form
            method="POST"
            id="contactForm"
            name="contactForm"
            className="contactForm"
            onSubmit={handleForm}
          >
            <div style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
              <div>
                <label style={{ fontWeight: "500", marginBottom: "5px", display: "block" }}>
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="Full Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  style={{
                    width: "100%",
                    padding: "12px",
                    borderRadius: "6px",
                    border: "1px solid #ccc",
                    fontSize: "16px",
                  }}
                />
              </div>

              <div>
                <label style={{ fontWeight: "500", marginBottom: "5px", display: "block" }}>
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  style={{
                    width: "100%",
                    padding: "12px",
                    borderRadius: "6px",
                    border: "1px solid #ccc",
                    fontSize: "16px",
                  }}
                />
              </div>

              <div>
                <label style={{ fontWeight: "500", marginBottom: "5px", display: "block" }}>
                  Password
                </label>
                <input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  style={{
                    width: "100%",
                    padding: "12px",
                    borderRadius: "6px",
                    border: "1px solid #ccc",
                    fontSize: "16px",
                  }}
                />
              </div>

              <div>
                <label style={{ fontWeight: "500", marginBottom: "5px", display: "block" }}>
                  Contact
                </label>
                <input
                  type="tel"
                  placeholder="Contact"
                  minLength={10}
                  maxLength={10}
                  value={contact}
                  onChange={(e) => setContact(e.target.value)}
                  style={{
                    width: "100%",
                    padding: "12px",
                    borderRadius: "6px",
                    border: "1px solid #ccc",
                    fontSize: "16px",
                  }}
                />
              </div>

              <button
                type="submit"
                style={{
                  background: "#007bff",
                  color: "#fff",
                  padding: "12px",
                  border: "none",
                  borderRadius: "6px",
                  fontSize: "16px",
                  cursor: "pointer",
                }}
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>

  )
}