import { addDoc,collection,deleteDoc,doc,onSnapshot,query,Timestamp,where } from "firebase/firestore"
import { useEffect ,useState } from "react"
import { db } from "../../Firebase"
import { toast } from "react-toastify"
import axios from "axios"
import Swal from "sweetalert2"
import { Link } from "react-router-dom"
import { PacmanLoader } from "react-spinners"


export default function ManagePGOwners(){
     const [load, setLoad]=useState(true)
    const [AllPgOwners,setAllPgOwners]=useState([])

    const fetchData=()=>{
        const q=query(collection(db,"pgowners")
        // ,where("type","==","Dog")
    ) 
        onSnapshot(q,(pgownersData)=>{
            setAllPgOwners(
                pgownersData.docs.map((el)=>{
                // console.log(el.id,el.data());
                return{id:el.id,...el.data()}
            }))
            setLoad(false)
        })
    }

    useEffect(()=>{
        fetchData()
    },[])

    const DeletePgOwners= (PgOwnersId)=>{
       
        Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
        }).then(async (result) => {
        if (result.isConfirmed) {
            await deleteDoc(doc(db,"pgowners",PgOwnersId))
            .then(()=>{
                Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success"
                });

            }).catch((error)=>{
                toast.error(error.message)
            })
           
        }
        });
                
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
                        Manage PgOwners<i className="ion-ios-arrow-forward" />
                        </span>
                    </p>
                    <h1 className="mb-0 bread">Manage Pg Owners</h1>
                    </div>
                </div>
                </div>
            </section>
            <div className="container my-5">
            {/* {load? */}
            {/* <PacmanLoader color="#00BD56" size={30} cssOverride={{display:"block", margin:"0 auto"}} loading={load}/> */}
            {/* : */}
            <div className="row justify-content-center no-gutters">
              <div className="col-md-12" style={{boxShadow:"0px 0px 15px gray"}}>
                <div className="d-flex justify-content-end p-2">
                    <Link to={"/admin/pgowners/add"} className="btn btn-outline-primary">Add New +</Link>
                </div>
                <div className="contact-wrap w-100 p-md-5 p-4">
                  <h3 className="mb-4">Pg Owners</h3>
                  <table className="table table-striped">
                                    <thead>
                                        <tr>
                                        <th scope="col">Sno.</th>
                                        <th scope="col">Pg Owner Name</th>
                                        <th scope="col">Email</th>
                                        <th scope="col">Contact</th>
                                    
                                        <th scope="col">Actions</th>

                                        </tr>
                                    </thead>
                  {
                    AllPgOwners.map((el,index)=>{
                        return <tbody>
                                        <tr>
                                        <th scope="row">{index+1}</th>
                                        <td>{el.pgownersName}</td>
                                        <td>{el.type}</td>
                                        <td>{el.description}</td>
                                         <td>
                                            <img className="img-fluid" src={el.image} alt=""  style={{height:"50px", width:"50px"}}/></td>
                                         <td>
                                            <Link to={"/admin/pgowners/edit/"+el.id} className="btn btn-outline-success mx-2">Edit</Link>
                                            <button className="btn btn-danger" onClick={()=>{
                                            DeletePgOwners(el.id)
                                         }}>Delete </button></td>

                                        </tr>
                                       
                                    </tbody>

                        
                    })
                  }
                                </table>

{/*                                 
{
    AllBreeds.map((el)=>{
         return <div className="card" style={{ width: "18rem" }}>
                                    <img className="card-img-top" src={el.image} alt="Card image cap" />
                                    <div className="card-body">
                                        <h5 className="card-title">{el.breedName}</h5>
                                        <p className="card-text">
                                        {el.description}
                                        </p>
                                        <a href="#" className="btn btn-primary">
                                        Go somewhere
                                        </a>
                                    </div>
</div>
    })
} */}
                               


                 
                </div>
              </div>
             
            </div>
            {/* } */}
            </div>

        </>
    )
}