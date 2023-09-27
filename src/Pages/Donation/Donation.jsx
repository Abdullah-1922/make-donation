import { useEffect, useState } from "react";
import DonationSingle from "./DonationSingle";


const Donation = () => {

const [donated,setDonated]= useState([])

useEffect(()=>{
    const loadData =JSON.parse(localStorage.getItem('donated')) 
    setDonated(loadData)
},[])


    return (
       <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        {
            donated?.map(donate=>(<DonationSingle key={donate.id} donate={donate}></DonationSingle>))
        }
       </div>
    );
};

export default Donation;