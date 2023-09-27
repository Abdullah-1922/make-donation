import { Link } from "react-router-dom";


/* eslint-disable react/prop-types */
const DonationCard = ({ card }) => {
  const { img, category, name ,id} = card;

  

  return (
    <Link to={`/details/${id}`}>
    <div  className='card  bg-base-100 shadow-xl'>
      <figure>
        <img
        className="h-[250px] w-full"
          src={img}
          alt='Shoes'
        />
      </figure>
      <div className='p-3'>
        <h2 className=' px-2 mt-4 font-semibold'>{category}</h2>
        <p className="text-xl px-2 font-bold">{name}</p>
        <div className='card-actions justify-end'>
        </div>
      </div>
    </div>
    </Link>
  );
};

export default DonationCard;
