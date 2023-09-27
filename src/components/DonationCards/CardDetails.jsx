import { useEffect, useState } from 'react';
import { Link, useLoaderData, useParams } from 'react-router-dom';

const CardDetails = () => {
  const [Card, setCard] = useState({});
  const { id } = useParams();
  const idInt = parseInt(id);
  const cards = useLoaderData();
  
  useEffect(() => {
    const findCard = cards?.cards?.find((card) => card.id === idInt);
    setCard(findCard);
  }, [idInt, cards]);
  console.log(Card);
  return (
    <div className='mt-10'>
        
        <div className='relative'>
      <img className='w-screen  h-[500px] md:h-[700px] z-[2] ' src={Card.img} alt="" />
      <div>
       <div className='bg-black z-10 opacity-40 py-14     container absolute bottom-[0px] md:bottom-[0px]'>
       
      </div>
      <Link><button className='z-[100] p-3  absolute bottom-[35px] md:bottom-[30px] px-7 bg-red-700 ml-6 rounded-xl text-white font-semibold hover:bg-slate-800'>Donate ${Card.donationAmount}</button></Link>
      </div>
      </div>
     <div className='py-6 px-3 pb-20'>
      <h1 className='text-3xl font-bold py-3'>{Card.name}</h1>
      <p className='text-lg '>{Card.description}</p>
     </div>
    </div>
  );
};

export default CardDetails;
