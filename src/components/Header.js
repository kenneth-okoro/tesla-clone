// import MenuIcon from '@mui/icons-material/Menu';
// import CloseIcon from '@mui/icons-material/Close';
import { MenuOutline, CloseOutline } from 'react-ionicons';
import logo from '../images/logo.svg';
import { useState } from 'react';

function Header() {
  let cars = [
    {name: 'Model S', href: 'model-s'},
    {name: 'Model 3', href:'model-3'},
    {name: 'Model X', href:'model-x'},
    {name: 'Model Y', href:'model-y'},
  ]

  let links = [
    { name: 'Existing Inventory', link: '/existing-inventory' },
    { name: 'Used Inventory', link: '/used-inventory' },
    { name: 'Trade-in', link: '/trade-in' },
    { name: 'Cybertruck', link: '/cybertruck' },
    { name: 'Roadster', link: '/roadster' },
    { name: 'Semi', link: '/semi' },
    { name: 'Charging', link: '/charging' },
    { name: 'Power', link: '/power' },
    { name: 'Components', link: '/components' },
    { name: 'Utilities', link: '/utilities' },
    { name: 'Test Drive', link: '/test-drive' },
  ];
  const [open, setOpen] = useState(false); 

  return (
    <div className='h-14 fixed flex items-center justify-between px-5 top-0 left-0 right-0 z-10'>
      <img className='cursor-pointer' src={logo} alt='' />

      <div className='model-links hidden lg:flex items-center font-semibold uppercase flex-nowrap '>
        {cars.map((car, index) => (
          <a key={index} href={car.href} className='px-2.5'>
            {car.name}
          </a>
        ))}
      </div>

      <div className='shop-links flex items-center font-semibold uppercase'>
        <a href='/shop' className='mr-2.5'>
          Shop
        </a>
        <a href='/tesla-account' className='mr-2.5'>
          Tesla Account
        </a>
        <div onClick={() => setOpen(!open)} className='cursor-pointer z-30'>
          {open ? <CloseOutline /> : <MenuOutline />}
        </div>
      </div>

      <ul
        className={`fixed top-0 bottom-0 right-0 h-full bg-white z-20 w-80 list-none p-5 flex flex-col transition-all duration-500 ease-in ${
          open ? 'opacity-100' : '-right-80 opacity-0'
        }`}
      >
        {cars.map((car, index) => (
          <a
            key={index}
            href={car.href}
            className='mt-3 py-2 border-b-2 border-b-gray-300 font-semibold'
          >
            {car.name}
          </a>
        ))}
        {links.map((link, index) => (
          <li key={index} className='py-2 border-b-2 border-b-gray-300'>
            <a href={link.link} className='font-semibold'>
              {link.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Header;
