import {addDoc, collection,Timestamp} from "firebase/firestore";
import { useState } from "react";
import { db } from "../../Firebase";
import { toast } from "react-toastify";
import axios from "axios";
import { PacmanLoader } from "react-spinners";


export default function Addcity (){
   const [cityName, setCityName]=useState("")
    const [image, setImage]=useState({})
    const [imageName, setImageName]=useState("")
    const [load, setLoad]=useState(false)
    const handleForm=async (e)=>{
        e.preventDefault()
        setLoad(true)
        const formData = new FormData();
        formData.append("file", image);
        formData.append("upload_preset","images"); // Replace with your upload preset

        try {
            const response = await axios.post(
                `https://api.cloudinary.com/v1_1/dbx1jakrg/image/upload`, // Replace with your Cloudinary cloud name
                formData
            );
            saveData(response.data.secure_url)
        } catch (error) {
            toast.error("Error uploading image:", error.message);
            // saveData("No_image")
            setLoad(false)

        }
    }
    const changeImage=(e)=>{
        setImageName(e.target.value)
        setImage(e.target.files[0]);
    }

    const saveData=async (imageUrl)=>{
         try{
            //insertion 
            let data={
                cityName,
                image:imageUrl,
                
                status:true,
                createdAt:Timestamp.now()
            }
            // console.log(data);
            //addDoc(collection(db, "collectionName"), data)
            await addDoc(collection(db, "cities"), data)
            toast.success("City added successfully!")
            setCityName("")
            setImage({})
            setImageName("")
            // setUrl("")
        }
        catch(err){
            toast.error(err.message)
        }
        finally{
          setLoad(false)
        }
    }
    return(
        <>
        <section
                className="hero-wrap hero-wrap-2"
                style={{ backgroundImage: 'url("/assets/images/bg_2.jpg")' }}
                data-stellar-background-ratio="0.5"
            >
                <div className="overlay" />
                <div className="container">
                <div className="row no-gutters slider-text align-items-end">
                    <div className="col-md-9 ftco-animate pb-5">
                    <p className="breadcrumbs mb-2">
                        <span className="mr-2">
                    
                        </span>{" "}
                        <span>
                        City <i className="ion-ios-arrow-forward" />
                        </span>
                    </p>
                    <h1 className="mb-0 bread">Add City</h1>
                    </div>
                </div>
                </div>
            </section>
            <div className="container my-5">
            {
            load?
            <PacmanLoader color="#00BD56" size={30} cssOverride={{display:"block", margin:"0 auto"}} loading={load}/>
           
              :
              <div className="row justify-content-center no-gutters">
                <div className="col-md-7" style={{boxShadow:"0px 0px 15px gray"}}>
                  <div className="contact-wrap w-100 p-md-5 p-4">
                    <h3 className="mb-4">Add City</h3>
                    <form
                      method="POST"
                      id="contactForm"
                      name="contactForm"
                      className="contactForm"
                      onSubmit={handleForm}
                    >
                      <div className="row">
                      
                        <div className="col-md-12">
                          <div className="form-group">
                            <label className="label" htmlFor="email">
                              City Name
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              id="cityName"
                              placeholder="City Name"
                              value={cityName}
                              onChange={(e)=>{
                                  setCityName(e.target.value)
                              }}
                            />
                          </div>
                        </div>
                       
                        <div className="col-md-12">
                          <div className="form-group">
                            <label className="label" htmlFor="subject">
                              Image
                            </label>
                            <input
                              type="file"
                              className="form-control"
                              name="image"
                              id="image"
                              placeholder="Image"
                              value={imageName}
                              onChange={changeImage}
                            />
                          </div>
                        </div>
                     
                        <div className="col-md-12">
                          <div className="form-group">
                            <input
                              type="submit"
                              defaultValue="Submit"
                              className="btn btn-primary"
                            />
                            <div className="submitting" />
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              
              </div>
            }
            </div>
        </>
    )
}