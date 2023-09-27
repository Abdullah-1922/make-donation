import { useEffect, useState } from 'react';
import DonationSingle from './DonationSingle';

const Donation = () => {
  const [donated, setDonated] = useState([]);
  const [noFound, setNoFound] = useState('');
  const [isShowAll, setIsShowAll] = useState(false);

  useEffect(() => {
    const loadData = JSON.parse(localStorage.getItem('donated'));
    if (loadData) {
      setDonated(loadData);
    } else {
      setNoFound('NO DONATION HISTORY');
    }
  }, []);

  return (
    <div>
      {noFound ? (
        <p className='h-[80vh] items-center justify-center flex text-3xl'>
          {' '}
          {noFound}
        </p>
      ) : (
        <div>
         {
            isShowAll?  <div className='grid grid-cols-1 lg:grid-cols-2 gap-5'>
            {donated?.map((donate) => (
              <DonationSingle key={donate.id} donate={donate}></DonationSingle>
            ))}
          </div> :
           <div className='grid grid-cols-1 lg:grid-cols-2 gap-5'>
           {donated?.slice(0,4).map((donate) => (
             <DonationSingle key={donate.id} donate={donate}></DonationSingle>
           ))}
         </div>
         }
          <div className='text-center text-white pb-20'>
            
            { (donated.length >4)?
                <button
                className='p-2 bg-green-800 mt-5 px-4  rounded-lg'
                  onClick={() => {
                    setIsShowAll(!isShowAll);
                  }}>
                 {isShowAll? 'SHOW LESS':"SHOW MORE"}
                </button>
             :''
            }
          </div>
        </div>
      )}
    </div>
  );
};

export default Donation;
