import React from 'react'
import { Link } from 'react-router-dom'
import {FaArrowRight} from 'react-icons/fa6';

const Banner = () => {
  return (
    <div  className='px-4 py-32 bg-cyan-800 mx-auto h-screen '>
        <div className="text-white text-center my-32">
            <h1 className='text-5xl lg:text-7xl leading-snug font-bold mb-5'>Welcome to Our Blogs</h1>
            <p className='text-gray-100 lg:w-3/5 mx-auto mb-5 font-primary'>Start your blog now and be part of a community where writers and readers share their stories and ideas passionately. We provide all the essentials and helpful guides to get you started.</p>
            <div>
                <Link to="/blogs" className = "font-medium hover:text-black inline-flex items-center py-1" >Learn More <FaArrowRight className = 'mt-1 ml-2'/></Link>
            </div>
        </div>
    </div>
  )
}

export default Banner