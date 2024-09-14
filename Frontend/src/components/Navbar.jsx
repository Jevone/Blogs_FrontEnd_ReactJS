import React, {useState} from 'react'
import {NavLink} from 'react-router-dom'
import Modal from './Modal'

// react icons
import {FaDribbble, FaFacebook, FaTwitter, FaBars, FaXmark} from "react-icons/fa6";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(null);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }

    // navItems
    const navItems = [
        {path: "/", link: "Home"},
        {path: "/about", link: "About"},
        {path: "/blogs", link: "Blogs"},
        {path: "/contact", link: "Contact"},
    ]

    // modal details
    const openModal = () => {
        setIsModalOpen(true);
    }

    const closeModal = () => {
        setIsModalOpen(false);
    }

  return (
    <header className='bg-cyan-800 text-white fixed top-0 left-0 right-0'>
        <nav className='px-4 py-4 max-w-7xl mx-auto flex justify-between items-center'>
            <a href="/" className='text-xl font-bold text-white font-serif '>Wel<span className='text-yellow-400 font-serif font-bold'>Come</span></a>
        
            {/* navitems for lg devices */}
            <ul className='md:flex gap-12 text-lg hidden'>
                {
                    navItems.map(({path, link}) => <li className='text-white hover:text-black font-mono' key={path}>
                        <NavLink className={({ isActive, isPending }) =>
                      isActive
                        ? "active"
                        : isPending
                        ? "pending"
                        : ""
                    } to = {path}>{link}</NavLink>
                    </li>)
                }
            </ul>
            
            {/* menu icons */}
            <div className='text-white lg:flex gap-4 items-center hidden'>
                <a href="/" className='hover:text-black'><FaFacebook/></a>
                <a href="/" className='hover:text-black'><FaDribbble/></a>
                <a href="/" className='hover:text-black'><FaTwitter/></a>
                <button onClick={openModal} className='bg-black px-6 py-2 font-medium rounded hover:bg-white hover:text-black transition-all duration-200 ease-in'>Log in</button>
            </div>

            <Modal isOpen={isModalOpen} onClose ={closeModal}/>

            {/* mobile menu btn, display mobile screen */}
            <div className='md:hidden'>
                <button onClick={toggleMenu} className='cursor-pointer'>
                    {
                        isMenuOpen ? <FaXmark className ='w-5 h-5 bg-black'/> : <FaBars className='w-5 h-5 bg-black'/>
                    }
                </button>
            </div>

            {/* menu items only for mobile */}
            <div>
                <ul className={`md:hidden gap-12 text-lg block space-y-4 px-4 py-6 mt-14 bg-cyan-800 ${isMenuOpen ? "fixed top-0 left-0 w-full transition-all ease-out duration-150" : "hidden"}`}>
                    {
                        navItems.map(({path, link}) => <li className='text-white font-bold' key = {path}><NavLink onClick={toggleMenu} to = {path}>{link}</NavLink>
                        </li>)
                    }
                </ul>
            </div>
        </nav>
    </header>
  )
}

export default Navbar