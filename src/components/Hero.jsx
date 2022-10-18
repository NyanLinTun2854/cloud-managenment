import React from 'react'
import bgImg from '../assets/cyber-bg.png'
import {
  CloudUploadIcon,
  DatabaseIcon,
  PaperAirplaneIcon,
  ServerIcon,
} from '@heroicons/react/solid'
import { BsFillCloudUploadFill } from 'react-icons/bs'
import { FaDatabase } from 'react-icons/fa'
import { HiOutlinePaperAirplane } from 'react-icons/hi'
import { HiServer } from 'react-icons/hi'

const Hero = () => {
  return (
    <div className='w-full h-screen bg-zinc-200 pt-14' name='Home'>
      <div className='relative w-full h-full grid md:grid-cols-2 md:items-center'>
        <div className='flex flex-col md:items-start space-y-2 px-2'>
          <p className='text-2xl md:text-2xl'>Unique Sequencing & Production</p>
          <h1 className='text-5xl font-bold'>Cloud Management</h1>
          <p className='text-2xl'>This is our Tech brand.</p>
          <button className='py-3 md:w-[60%] border hover:border-blue-500 hover:text-blue-500'>Get Started</button>
        </div>
        <div>
          <img src={bgImg} alt="" />
        </div>
        <div className='absolute flex flex-col justify-center w-[90%] h-[100px] bg-zinc-200 border border-slate-300 bottom-[5%] left-1/2 -translate-x-1/2 shadow-lg rounded-lg'>
          <div className='text-center'>Data Services</div>
          <div className='flex justify-center flex-wrap space-y-2'>
            <p className='w-[50%] md:w-[25%] flex pl-8 justify-start items-center text-slate-400'><BsFillCloudUploadFill className='text-indigo-500 mr-2' />App Security</p>
            <p className='w-[50%] md:w-[25%] flex pl-8 justify-start items-center text-slate-400'><FaDatabase className='text-indigo-500 mr-2' />Dashboard Design</p>
            <p className='w-[50%] md:w-[25%] flex pl-8 justify-start items-center text-slate-400'><HiServer className='text-indigo-500 mr-2' />Cloud Data</p>
            <p className='w-[50%] md:w-[25%] flex pl-8 justify-start items-center text-slate-400'><HiOutlinePaperAirplane className='text-indigo-500 mr-2' />API</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero