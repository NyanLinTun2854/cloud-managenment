import React from 'react'
import { CheckIcon } from '@heroicons/react/solid';
import { MdOutlineDone } from 'react-icons/md'

const Pricing = () => {
    return (
        <div className='w-full my-8 pb-10' name='Pricing'>
            <div className='w-full relative'>
                <div className='w-full h-[700px] absolute -z-30 bg-slate-900'></div>
                <div className='px-4'>
                    <div className='text-center text-slate-300 py-10 md:py-20'>
                        <p className='text-3xl uppercase'>Pricing</p>
                        <h1 className='text-5xl text-white font-bold py-5'>The right price for your research.</h1>
                        <p className='text-3xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea quae, ab temporibus fugit libero quibusdam ducimus eaque ad, amet ipsa velit aliquam hic odit omnis!</p>
                    </div>
                    <div className='grid gap-y-8 md:grid-cols-2 md:gap-x-4'>
                        <div className='px-4 bg-white py-6 rounded-xl shadow-xl lg:space-y-5'>
                            <p className='py-1 px-2 uppercase text-sm text-indigo-900 bg-indigo-200 inline rounded-full'>Standard</p>
                            <div className='flex justify-start items-end'>
                                <h1 className='text-6xl font-bold pt-4'>$49</h1>
                                <p className='text-slate-500 font-bold'>/mo</p>
                            </div>
                            <p className='text-xl text-slate-500 py-6'>
                                Lorem ipsum dolor, sit amet consectetur adipisicing.
                            </p>
                            <div className='flex flex-col gap-y-4 lg:gap-y-8'>
                                <div className='flex justify-start items-center'>
                                    <MdOutlineDone className='text-3xl text-green-600' />
                                    <span className='text-xl'>Lorem, ipsum dolor.</span>
                                </div>
                                <div className='flex justify-start items-center'>
                                    <MdOutlineDone className='text-3xl text-green-600' />
                                    <span className='text-xl'>Lorem, ipsum dolor.</span>
                                </div>
                                <div className='flex justify-start items-center'>
                                    <MdOutlineDone className='text-3xl text-green-600' />
                                    <span className='text-xl'>Lorem, ipsum dolor.</span>
                                </div>
                                <div className='flex justify-start items-center'>
                                    <MdOutlineDone className='text-3xl text-green-600' />
                                    <span className='text-xl'>Lorem, ipsum dolor.</span>
                                </div>
                                <div className='flex justify-start items-center'>
                                    <MdOutlineDone className='text-3xl text-green-600' />
                                    <span className='text-xl'>Lorem, ipsum dolor.</span>
                                </div>
                            </div>
                            <div className='flex pt-5'>
                                <button className='w-full py-4 hover:border hover:border-indigo-500 hover:text-indigo-500 rounded-lg'>
                                    Get Started
                                </button>
                            </div>
                        </div>
                        <div className='px-4 bg-white py-6 rounded-xl shadow-xl lg:space-y-5'>
                            <p className='py-1 px-2 uppercase text-sm text-indigo-900 bg-indigo-200 inline rounded-full'>Standard</p>
                            <div className='flex justify-start items-end'>
                                <h1 className='text-6xl font-bold pt-4'>$49</h1>
                                <p className='text-slate-500 font-bold'>/mo</p>
                            </div>
                            <p className='text-xl text-slate-500 py-6'>
                                Lorem ipsum dolor, sit amet consectetur adipisicing.
                            </p>
                            <div className='flex flex-col gap-y-4 lg:gap-y-8'>
                                <div className='flex justify-start items-center'>
                                    <MdOutlineDone className='text-3xl text-green-600' />
                                    <span className='text-xl'>Lorem, ipsum dolor.</span>
                                </div>
                                <div className='flex justify-start items-center'>
                                    <MdOutlineDone className='text-3xl text-green-600' />
                                    <span className='text-xl'>Lorem, ipsum dolor.</span>
                                </div>
                                <div className='flex justify-start items-center'>
                                    <MdOutlineDone className='text-3xl text-green-600' />
                                    <span className='text-xl'>Lorem, ipsum dolor.</span>
                                </div>
                                <div className='flex justify-start items-center'>
                                    <MdOutlineDone className='text-3xl text-green-600' />
                                    <span className='text-xl'>Lorem, ipsum dolor.</span>
                                </div>
                                <div className='flex justify-start items-center'>
                                    <MdOutlineDone className='text-3xl text-green-600' />
                                    <span className='text-xl'>Lorem, ipsum dolor.</span>
                                </div>
                            </div>
                            <div className='flex pt-5'>
                                <button className='w-full py-4 hover:border hover:border-indigo-500 hover:text-indigo-500 rounded-lg'>
                                    Get Started
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Pricing