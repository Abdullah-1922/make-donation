const DonationCard = ({ card }) => {
  const { img, category, name } = card;
  return (
    <div className='card  bg-base-100 shadow-xl'>
      <figure>
        <img
        className="h-[250px] w-full"
          src={img}
          alt='Shoes'
        />
      </figure>
      <div className='card-body'>
        <h2 className='text-xl p-2 font-semibold'>{category}</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div className='card-actions justify-end'>
          <button className='btn btn-primary'>Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default DonationCard;
