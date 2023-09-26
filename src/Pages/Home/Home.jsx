import { useLoaderData } from "react-router-dom";
import Banner from "../../components/Banner/Banner";
import DonationCards from "../../components/DonationCards/DonationCards";


const Home = () => {

const cards=useLoaderData()



    return (
        <div>
          
           <Banner></Banner>
           <DonationCards cards={cards}></DonationCards>
        </div>
        
    );
};

export default Home;