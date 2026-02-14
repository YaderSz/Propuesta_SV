'use client'
import React, {useState, useEffect, useRef} from 'react';
import Link from 'next/link';
import { IoMdClose } from 'react-icons/io';
import { RxHamburgerMenu } from 'react-icons/rx';
import Image from 'next/image'


const Navbar = () => {

    const [isClick, setIsClick] = useState(false);
    const [isUserOpenMenu, setUserOpenMenu] = useState(false);

  const userMenuRef = useRef<HTMLDivElement>(null);

    const toggleDropDown = () =>{
        setIsClick(!isClick)
    }

    const toggleUserMenu = () =>{
        setUserOpenMenu(!isUserOpenMenu)
    }

  const handleClickOutside = (event: MouseEvent) => {
    if (userMenuRef.current && !userMenuRef.current.contains(event.target as Node)) {
      setUserOpenMenu(false);
    }
  };

  useEffect(() =>{
    const handleClickOutsideEvent = (event: MouseEvent) => handleClickOutside(event);
    document.addEventListener('mousedown', handleClickOutsideEvent as EventListener);
    return () =>{
        document.removeEventListener('mousedown', handleClickOutsideEvent as EventListener);
    
    };
  }, []);

  return (
    <nav className='flex items-center justify-between p-5 w-full top-0 fixed shadow-md z-50 bg-backgroundNav backdrop-blur-md'>
      {/* Menu Logo */}
      <div className='flex items-center justify-between w-full md:w-auto'>
        <button className="md:hidden" onClick={toggleDropDown}>
          {isClick ? (
            <IoMdClose size={24} color="#fff" />
          ) : (
            <RxHamburgerMenu size={24} color="#fff" />
          )}
        </button>
        <div className="flex-1 flex justify-center md:justify-start">
          <Image src='/amor.png' width={50} height={50} alt='Logo'/>
        </div>
      </div>

          
      {/* Navigation Links */}<div className='hidden md:flex md:flex-row md:gap-8 text-xl font-semibold'>
  <Link href='/' 
    className='relative p-2 text-pink-500 hover:text-pink-600 transition-all duration-300
    after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 
    after:bg-pink-500 after:transition-all after:duration-300 
    hover:after:w-full'>
    Inicio
  </Link>

  <Link href='#MisionVision' 
    className='relative p-2 text-pink-500 hover:text-pink-600 transition-all duration-300
    after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 
    after:bg-pink-500 after:transition-all after:duration-300 
    hover:after:w-full'>
    Galeria
  </Link>

  <Link href='#Contacto' 
    className='relative p-2 text-pink-500 hover:text-pink-600 transition-all duration-300
    after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 
    after:bg-pink-500 after:transition-all after:duration-300 
    hover:after:w-full'>
    Contacto
  </Link>
</div>

      {/* Mobile Menu */}
      {isClick && (
        <div className='absolute top-full left-0 w-full shadow-md md:hidden flex flex-col items-center bg-backgroundNav'>
          <Link href='/' className='relative p-2 text-black hover:text-pink-500 transition-all duration-300
    after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 
    after:bg-pink-500 after:transition-all after:duration-300 
    hover:after:w-full'>Inicio</Link>
          <Link href='/' className='relative p-2 text-black hover:text-pink-500 transition-all duration-300
    after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 
    after:bg-pink-500 after:transition-all after:duration-300 
    hover:after:w-full'>Galeria</Link>
          <Link href='/' className='relative p-2 text-black hover:text-pink-500 transition-all duration-300
    after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 
    after:bg-pink-500 after:transition-all after:duration-300 
    hover:after:w-full'>Contacto</Link>
        </div>
      )}
    </nav>

  );
};

export default Navbar