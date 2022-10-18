import React from 'react'
import bg from '../assets/support.jpg'
import { AiFillPhone } from 'react-icons/ai'
import { BsArrowRight } from 'react-icons/bs'
import { MdOutlineSupport } from 'react-icons/md'
import { BiChip } from 'react-icons/bi'

const Support = () => {
    return (
        <div className='w-full min-h-[100vh]' name='Support'>
            <div className='w-full h-full my-4'>
                <div className='w-full h-[700px] absolute bg-gray-900/90'>
                    <img src={bg} className='w-full h-full mix-blend-overlay object-cover object-center' alt="" />
                </div>
                <div className='text-center relative text-white pt-12 sm:py-20 lg:py-30'>
                    <p className='text-3xl uppercase'>Support</p>
                    <h1 className='text-5xl font-bold py-6'>Finding the right team</h1>
                    <p className='text-3xl text-slate-300'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. In repudiandae veritatis ratione error tenetur, voluptates architecto possimus ad! Omnis minima ea quidem quisquam unde beatae, minus illo et cum vel?
                    </p>
                </div>
                <div className='grid lg:grid-cols-3 gap-y-14 lg:gap-x-4 px-4 pt-20'>
                    <div className='relative bg-white rounded-lg shadow-xl'>
                        <div className='absolute p-4 bg-indigo-500 rounded-lg -top-[15%] left-[8%]'>
                            <AiFillPhone className='text-white w-8 h-8  bg-indigo-500' />
                        </div>
                        <div className='px-[8%]'>
                            <h1 className='pt-10 text-2xl font-bold py-4'>Sales</h1>
                            <p className='text-xl text-gray-600 tracking-wide'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi provident iure placeat blanditiis ea sint earum hic iste quibusdam exercitationem.
                            </p>
                        </div>
                        <div className='w-full pt-8'>
                            <button className='flex items-center bg-slate-100 text-indigo-500 w-full rounded-none py-4 pl-[8%] gap-2'>
                                Contact Us
                                <BsArrowRight />
                            </button>
                        </div>
                    </div>
                    <div className='relative bg-white rounded-lg shadow-lg'>
                        <div className='absolute p-4 bg-indigo-500 rounded-lg -top-[15%] left-[8%]'>
                            <MdOutlineSupport className='text-white w-8 h-8  bg-indigo-500' />
                        </div>
                        <div className='px-[8%]'>
                            <h1 className='pt-10 text-2xl font-bold py-4'>Technical Support</h1>
                            <p className='text-xl text-gray-600 tracking-wide'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi provident iure placeat blanditiis ea sint earum hic iste quibusdam exercitationem.
                            </p>
                        </div>
                        <div className='w-full pt-8'>
                            <button className='flex items-center bg-slate-100 text-indigo-500 w-full rounded-none py-4 pl-[8%] gap-2'>
                                Contact Us
                                <BsArrowRight />
                            </button>
                        </div>
                    </div>
                    <div className='relative bg-white rounded-lg shadow-lg'>
                        <div className='absolute p-4 bg-indigo-500 rounded-lg -top-[15%] left-[8%]'>
                            <BiChip className='text-white w-8 h-8  bg-indigo-500' />
                        </div>
                        <div className='px-[8%]'>
                            <h1 className='pt-10 text-2xl font-bold py-4'>Media Inquiries</h1>
                            <p className='text-xl text-gray-600 tracking-wide'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi provident iure placeat blanditiis ea sint earum hic iste quibusdam exercitationem.
                            </p>
                        </div>
                        <div className='w-full pt-8'>
                            <button className='flex items-center bg-slate-100 text-indigo-500 w-full rounded-none py-4 pl-[8%] gap-2'>
                                Contact Us
                                <BsArrowRight />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Support