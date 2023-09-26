import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";



const MainPage = () => {
    return (
        <div className="container mx-auto">
            <Navbar></Navbar>
            <Outlet></Outlet>
           
        </div>
       
    );
};

export default MainPage;