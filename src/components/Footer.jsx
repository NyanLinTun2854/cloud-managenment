import React from 'react'
import { FaFacebook, FaInstagram, FaTwitter, FaTwitch, FaGithub } from 'react-icons/fa'

const Footer = () => {
    return (
        <div className='w-full h-auto bg-slate-900'>
            <div className='flex flex-col md:flex-row md:justify-between px-2 pb-8'>
                <div className='md:w-[70%] grid grid-cols-2 md:grid-cols-4 text-gray-300 py-8'>
                    <div className='flex flex-col'>
                        <div className='font-bold uppercase py-2'>
                            Solutions
                        </div>
                        <div className='flex flex-col px-4 space-y-2'>
                            <p>Marketing</p>
                            <p>Analytics</p>
                            <p>Commerce</p>
                            <p>Data</p>
                            <p>Cloud</p>
                        </div>
                    </div>
                    <div className='flex flex-col'>
                        <div className='font-bold uppercase py-2'>
                            Support
                        </div>
                        <div className='flex flex-col px-4 space-y-2'>
                            <p>Pricing</p>
                            <p>Documentation</p>
                            <p>Guides</p>
                            <p>API Status</p>
                        </div>
                    </div>
                    <div className='flex flex-col'>
                        <div className='font-bold uppercase py-2'>
                            Company
                        </div>
                        <div className='flex flex-col px-4 space-y-2'>
                            <p>About</p>
                            <p>Blog</p>
                            <p>Jobs</p>
                            <p>Press</p>
                            <p>Partners</p>
                        </div>
                    </div>
                    <div className='flex flex-col'>
                        <div className='font-bold uppercase py-2'>
                            Legal
                        </div>
                        <div className='flex flex-col px-4 space-y-2'>
                            <p>Claims</p>
                            <p>Privacy</p>
                            <p>Terms</p>
                            <p>Polices</p>
                            <p>Conditions</p>
                        </div>
                    </div>
                </div>
                <div className='w-full md:w-[30%] text-gray-300 md:py-10'>
                    <p className='font-bold uppercase'>Subscribe to our newletter</p>
                    <p className='py-4'>The latest news, articles, and resources, sent to you inbox weekly.</p>
                    <div className='flex flex-col gap-y-2'>
                        <input type="text" className='rounded py-2 pl-4' placeholder='Email Enter...' />
                        <button className='py-2 hover:border hover:border-indigo-500 hover:text-indigo-500'>
                            Subscribe
                        </button>
                    </div>
                </div>
            </div>
            <div className='text-xl text-gray-500 px-4 pb-8'>
                <div className='flex flex-col md:flex-row md:justify-between md:items-center border-t-2 border-t-slate-500 pt-8 gap-y-8'>
                    <div className='text-center md:w-[50%] md:text-start'>
                        2022 Workflow, LLC. All rights reserved
                    </div>
                    <div className='flex justify-between md:w-[30%]'>
                        <a href="#"><FaFacebook /></a>
                        <a href="#"><FaInstagram /></a>
                        <a href="#"><FaTwitter /></a>
                        <a href="#"><FaTwitch /></a>
                        <a href="#"><FaGithub /></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer