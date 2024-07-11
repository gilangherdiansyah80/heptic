/* eslint-disable react/prop-types */
import { useState } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Icon from "../Elements/Icon";
import { Link } from "react-router-dom";

const AuthLayout = ({ children }) => {
    
  AOS.init();

  const [open, setOpen] = useState(false);

  const handleToggle = () => {
    setOpen(!open);
  }

  return (
    <div className='w-full overflow-x-hidden'>
      <header className="bg-zinc-900 top-0 left-0 w-full lg:flex lg:justify-center font-inter fixed z-10 h-16 md:h-20" data-aos="fade-down">
          <div className="w-full lg:w-1/2 h-full flex justify-center lg:justify-between items-center">
          <div className='w-full flex justify-between lg:justify-start items-center'>
                <img src="/images/HEPTICLOGOOUT.png" alt="HEPTIC" className="w-44 h-32" />
                <div className='mr-2 lg:hidden'>
                  {open ? (
                      <Icon style="fas fa-times text-3xl md:text-4xl text-white mr-2 cursor-pointer" handleIcon={handleToggle}></Icon>
                  ) : (
                      <Icon style="fas fa-bars text-3xl md:text-4xl text-white mr-2 cursor-pointer" handleIcon={handleToggle}></Icon>
                  )}
                </div>
          </div>
          {open && (
                <nav className="bg-zinc-900 w-full mt-40 md:mt-52 absolute lg:hidden">
                    <ul className='text-white flex flex-col font-bold md:text-xl'>
                      <Link to='/'>
                          <li className={`hover:bg-gray w-full p-2 md:p-4 px-4 ${location.pathname === '/' ? 'bg-gray' : 'hover:bg-slate-700'}`}>Home</li>
                      </Link>
                      <Link to='/menu'>
                          <li className={`hover:bg-gray w-full p-2 md:p-4 px-4 ${location.pathname === '/menu' ? 'bg-gray' : 'hover:bg-gray'}`}>Menu</li>
                      </Link>
                    </ul>
                </nav>
          )}

                <nav className="hidden w-full lg:block">
                    <ul className='text-white flex justify-end gap-x-10 font-bold'>
                      <Link to='/'>
                          <li className={`w-full p-2 md:p-4 px-4 text-xl ${location.pathname === '/' ? 'text-gray' : 'hover:text-gray'}`}>Home</li>
                      </Link>
                      <Link to='/menu'>
                          <li className={`w-full p-2 md:p-4 px-4 text-xl ${location.pathname === '/menu' ? 'text-gray' : 'hover:text-gray'}`}>Menu</li>
                      </Link>
                    </ul>
                </nav>
          </div>
      </header>
      
      <main className='w-full' style={{backgroundColor: '#EEEEEE'}}>
            {children}
            <div className='w-14 h-14 md:w-16 md:h-16 rounded-full fixed z-20 bottom-5 right-5 bg-green-500 flex items-center justify-center'>
                <Icon style="fab fa-whatsapp text-3xl md:text-4xl text-white cursor-pointer p-3"></Icon>
            </div>
      </main>

      <footer className='absolute w-full p-3 bg-zinc-900 lg:flex lg:flex-col lg:justify-center'>
         <div className="lg:flex lg:gap-x-8 lg:w-full lg:justify-center lg:self-center lg:pl-16">
          <div className='text-white mt-5 mb-10 flex flex-col gap-y-5 text-inter lg:w-3/4'>
            <h1 className='text-3xl md:text-4xl'>HEPTIC</h1>
            <p className='text-sm md:text-lg text-gray-300'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum tempore quaerat consectetur expedita rerum minus officiis quod. Tempore, reiciendis libero labore quasi ipsam ad dignissimos illo quae magnam iusto ipsa!</p>
          </div>

          <hr className='border-dashed border-darkwhite lg:hidden' />

          <div className='mt-10 text-white flex flex-col gap-y-5 font-inter mb-10 lg:flex-row lg:gap-x-5 lg:justify-center lg:self-center lg:w-full'>
            <div className='flex flex-col gap-y-3 lg:w-3/4'>
            <h2 className='text-lg md:text-xl font-semibold'>Contact Us</h2>
            <p className='text-sm md:text-lg text-gray-300'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto, sequi neque! Nisi modi temporibus repellendus fugiat praesentium dolorum veniam ad. Expedita possimus illum cumque nisi atque corrupti nesciunt sequi recusandae.</p>
            </div>
            <div className='flex flex-col gap-y-3 lg:w-1/4'>
              <h2 className='text-lg md:text-xl font-semibold'>Explore HEPTIC!</h2>
              <ul className="md:text-lg">
                <li>Home</li>
                <li>About Us</li>
                <li>Menu</li>
                <li>Contact Us</li>
              </ul>
            </div>
            <div className='flex flex-col gap-y-3 lg:w-1/4'>
              <h2 className='text-lg md:text-xl font-semibold'>Follow Us</h2>
              <ul className='flex gap-x-3'>
                <li className='bg-white w-8 md:w-10 h-8 md:h-10 flex items-center justify-center rounded-md'>
                  <Icon style="fab fa-instagram text-xl md:text-2xl text-slate-800 cursor-pointer"></Icon>
                </li>
                <li className='bg-white w-8 md:w-10 h-8 md:h-10 flex items-center justify-center rounded-md'>
                  <Icon style="fas fa-shopping-bag text-xl md:text-2xl text-slate-800 cursor-pointer"></Icon>
                </li>
              </ul>
            </div>
          </div>
         </div>

         <hr className='border-dashed border-darkwhite' />

         <div className='py-3 text-white'>
          <p className='text-center md:text-lg'>Copyright © 2024 DevSynergy</p>
         </div>
      </footer>
    </div>
    )
}

export default AuthLayout;