import React from 'react'
import { RiCustomerService2Full, RiCustomerService2Fill } from 'react-icons/ri';
import {MdOutlineTravelExplore} from 'react-icons/md';
const Search = () => {
  return (
    <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3 gap-4 px-4 py-16'>
        <div className='lg:col-span-2 flex flex-col justify-evenly'>
            <div>
                <h2>LUXURY INCLUDED VACATIONS FOR TWO PEOPLE</h2>
                <p className='py-4'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo obcaecati cupiditate, blanditiis possimus ut eligendi repellat 
                    exercitationem recusandae perspiciatis nesciunt ea iusto atque totam ipsum a. Culpa fugit pariatur ipsam.
                </p>
            </div>
            <div className="grid sm:grid-cols-2 gap-8 py-4">
                <div className='flex flex-col lg:flex-row items-center text-center'>
                    <button>
                        <RiCustomerService2Fill size={50}/>
                        </button>
                        <div>
                            <h3 className='py-2'>LEADING SERVICE</h3>
                            <p className='py-1'>ALL INCLUSIVE COMPANY FOR 20 YEARS IN A ROW</p>
                        </div>
                        </div>
                        <div className='flex flex-col lg:flex-row items-center text-center'>
                    <button>
                        <MdOutlineTravelExplore size={50} />
                        </button>
                        <div>
                            <h3 className='py-2'>LEADING SERVICE</h3>
                            <p className='py-1'>ALL INCLUSIVE COMPANY FOR 20 YEARS IN A ROW</p>
                        </div>
                        </div>

                <div></div>
            </div>
            </div>
        <div>
            <div className='border text-center'>
                <p className='pt-2'>GET AN ADDITIONAL 10% OFF</p>
                <p className='py-4'>12 HOURS LEFT</p>
                <p className='bg-gray-800 text-gray-200 py-2'>GET AN ADDITIONAL 10% OFF</p>
            </div>
            <form className='w-full'>
                <div className='flex flex-col my-2'>
                    <label>Destination</label>
                    <select className='border rounded-md p-2'>
                        <option>Lagos</option>
                        <option>Abuja</option>
                        <option>Ibadan</option>
                        <option>Port-harcourt</option>
                    </select>
                </div>
                <div className='flex flex-col my-4'>
                    <label>Check-In</label>
                    <input className='border rounded-md p-2' type="date" />
                </div>
                <div className='flex flex-col my-2'>
                    <label>Check-Out</label>
                    <input className='border rounded-md p-2' type="date" />
                </div>
                <button className='w-full my-4'>Rates & Availabilities</button>
            </form>
        </div>
        </div>
  )
}

export default Search