import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='flex items-center justify-between py-5 px-5'>
        <div>
         <img className='w-[180px]'  src="https://i.ibb.co/QFmhCNq/Logo.png" alt="" />
        </div>
      <ul className='flex gap-8 text-lg'>
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
