
const Banner = () => {
    return (
        <div className="">
       <div className="relative  object-cover ">
        <img className="opacity-60 bg-transparent w-screen h-[400px] md:h-[600px] lg:h-[650px] " src='https://i.ibb.co/rdd4K3S/people-meeting-community-center.jpg' alt="" />


       <div className=" text-center absolute left-4 bottom-[80px]  md:left-[100px] lg:left-[150px]  md:bottom-[180px] lg:bottom-[200px] ">
            <h1 className="text-2xl  font-bold md:text-4xl lg:text-6xl ">I Grow By Helping People In Need</h1>
            <div><input className="p-[5.9px] md:p-4 md:px-10 text-lg text-center mt-5 rounded-l-3xl " type="text" placeholder="Search" /><button className="bg-red-600 p-[5.2px] px-3  md:p-4 md:px-10 text-lg text-white font-semibold  rounded-r-3xl">Search</button></div>
        </div>
       </div>
        
        </div>
    );
};

export default Banner;