import React from 'react'
import { FaFacebook,FaTwitter,FaYoutube,FaPinterest,FaInstagram } from 'react-icons/fa';
import {AiFillCopyrightCircle} from 'react-icons/ai'

const Footer = () => {
  return (
    <div className='w-full bg-gray-100 py-16'>
        <div className='max-w-[1240px] mx-auto flex flex-col px-4'>
            <div className='sm:flex text-center justify-between items-center'>
                <h1 className='sm:text-xl text-2xl font-bold'>JayTee.</h1>
                <div className='flex justify-between w-full sm:max-w-[280px] my-4'>
                        <AiFillCopyrightCircle size={20} className='icon' /> 2023
                </div>
            </div>
            <div className='flex justify-between'>
                <ul className='lg:flex'>
                    <li>Phone : 08167576127</li>
                    <li>Email : sojimijesutofunmi@gmail.com</li>
                </ul>
                <ul className='text-right lg:flex'>
                {/*<li>Home</li>
                    <li>Destinations</li>
                    <li>Travel</li>
                    <li>View</li>
  <li>Book</li>*/}
                </ul>
            </div>

        </div>
    </div>
  )
}

export default Footer