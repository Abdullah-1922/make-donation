/* eslint-disable react/prop-types */


const DonationSingle = ({donate}) => {
    console.log(donate);
    const {img,category ,name ,text ,bg,btnBg,donationAmount
    }=donate
    return (
        <div >
            <div 
            style={{
                backgroundColor:`${bg}`, 
                
              }}
            className="relative flex  w-full max-w-[48rem] flex-row rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
  <div className="relative m-0 w-2/5 shrink-0 overflow-hidden rounded-xl rounded-r-none bg-white bg-clip-border text-gray-700">
    
    <img
    
      src={img}
      alt="image"
      className="h-[250px] w-[300px]"
    />
    
  </div>
  <div
  
  className="p-6">
   <div>
    <h3 
   style={{
    backgroundColor:`${btnBg}`,
    color:`${text}`
  }}
  className="w-fit p-1 px-3 font-semibold rounded-lg"
    >{category}</h3>
    <h2 className="text-2xl font-bold py-2">{name}</h2>
    <p 
    style={{
        color:`${text}`, 
        
      }}
      className="text-lg font-medium py-1 mb-3"
    >${donationAmount}.00</p>
    <button
    style={{
        backgroundColor:`${text}`, 
        
      }}
    className="p-2 px-4 text-white font-semibold rounded-xl">View Details</button>
   </div>
  </div>
</div>
        </div>
    );
};

export default DonationSingle;