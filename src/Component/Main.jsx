import React from 'react'
import Logo from '../Material/TextG.jpeg'
import Headertext from '../Material/HeaderText.jpeg'
import { AiOutlineTwitter } from "react-icons/ai";
import {FaDiscord} from 'react-icons/fa'

const Main = () => {
  return (
      <div className='bg-[#FFC4E2] ' >
          <div className='flex justify-end container	' >
          <AiOutlineTwitter size={30} className='text-white' />
          <FaDiscord size={30} className='text-white' />
          

          </div>
    <div className='p-16 bg-[#FFC4E2] font-semibold ' >
        
        <div className='flex justify-center items-center' >
            <img src={Logo} alt="Logo" className='w-[70vh] ' />
        </div>
        <div className='flex justify-center items-center' >
            <img src={Headertext} alt="Logo" className='w-[50vh]' />

        </div>
        <div className='flex justify-center items-center' >
            <p>COMING APRIL 2022</p>
        </div>
        <div className='flex items-center justify-center ' >
            <button className='pr-[30px] border-2 border-black bg-white mr-5 pl-5 rounded-md font-bold' >   TWITTER</button>
            <button className='pr-[30px] border-2 border-black bg-white mr-5 pl-5 rounded-md font-bold' >DISCORD</button>
        </div>

    </div>
    </div>
  )
}

export default Main