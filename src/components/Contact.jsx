import React from 'react'
import {BsPhone} from 'react-icons/bs'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-[#0a192f] flex justify-center items-center p-4'>
        <form method='POST' action="https://getform.io/f/0ed5a62e-a9f4-4a6b-a3ab-071a2c402e42" className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8'>
               
                <p className='text-4xl font-bold inline border-b-4 border-blue-300 text-gray-300'>Let's Cook Something!</p>
                <div>
                <div className='text-gray-300 font-[poppins] font-bold text-md justify-between inline-flex px-4 pt-4'>
                <BsPhone size={20} /> &nbsp; &nbsp;
                <h2>+234 816 757 6127</h2>
                </div>
                </div>
                <p className='text-gray-300 py-4'> Submit the form below or shoot me an email - sojimijesutofunmi@gmail.com
                </p>
       
            </div>
            <input className='bg-[#ccd6f6] p-2' type="text" placeholder='Name' name='name' />
            <input className='my-4 p-2 bg-[#ccd6f6]' type="email" placeholder='Email' name='email' />
            <textarea className='bg-[#ccd6f6] p-2' name="message" rows="10" placeholder='Message'></textarea>
            <button className='text-white border-2 hover:bg-blue-300 hover:border-blue-300 px-4 py-3 my-8 mx-auto flex items-center'>Let's Collaborate</button>
        </form>
    </div>
  )
}

export default Contact