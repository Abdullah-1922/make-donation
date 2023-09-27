import { Link } from "react-router-dom";


/* eslint-disable react/prop-types */
const DonationCard = ({ card }) => {
  const { img, category, name ,id ,bg,btnBg,text} = card;

  

  return (
    <Link to={`/details/${id}`}>
    <div  className='card  bg-base-100  shadow-xl'>
      <figure>
        <img
        className="h-[250px] w-full"
          src={img}
          alt='Shoes'
        />
      </figure>
      <div style={{
        backgroundColor:`${bg}`, color:`${text}`
        
      }} className='p-3 pb-6'>
        <h2 style={{
          backgroundColor:`${btnBg}`
        }} className=' font-semibold px-5 rounded-xl py-1 w-min mb-2 mt-4 text-lg'>{category}</h2>
        <p 
        style={{
          color:`${text}`
        }}
        className="text-xl px-2 font-bold">{name}</p>
        <div className='card-actions justify-end'>
        </div>
      </div>
    </div>
    </Link>
  );
};

export default DonationCard;
