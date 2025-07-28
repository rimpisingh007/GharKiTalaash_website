import { Outlet } from "react-router-dom";
import PGOwnerHeader from "./PGOwnerHeader";
import Footer from "./Footer";


export default function PGOwnerLayout(){
    return(
        <>
        <PGOwnerHeader/>
        <Outlet/>
        <Footer/>
        </>
    )
}