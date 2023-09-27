import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='flex  flex-col md:flex-row items-center justify-between py-5 px-5'>
        <div>
         <img className='w-[180px]'  src="https://i.ibb.co/Bqgd8tK/Logo.png" alt="" />
        </div>
      <ul className='flex mt-7 font-medium md:mt-0 gap-5 md:gap-8 text-lg'>
        <NavLink
          to='/'
          className={({ isActive, isPending }) =>
            isPending ? 'pending' : isActive ? 'font-bold text-red-600 underline' : ''
          }>
          Home
        </NavLink>
        <NavLink
          to='/donation'
          className={({ isActive, isPending }) =>
            isPending ? 'pending' : isActive ? 'font-bold text-red-600 underline' : ''
          }>
          Donation
        </NavLink>
        <NavLink
          to='/statistics'
          className={({ isActive, isPending }) =>
            isPending ? 'pending' : isActive ? 'font-bold text-red-600 underline' : ''
          }>
          Statistics
        </NavLink>
        
      </ul>
    </div>
  );
};

export default Navbar;
