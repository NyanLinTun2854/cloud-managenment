import React, { useState } from 'react'
import { AiOutlineMenu } from 'react-icons/ai'
import { TiDeleteOutline } from 'react-icons/ti'
import { Link } from 'react-scroll'

const Nav = () => {

    const Menu = ['Home', 'About', 'Support', 'Platforms', 'Pricing']

    const [nav, setNav] = useState(true)

    const handleChange = () => {
        setNav(!nav)
    }
    return (
        <div className='w-screen h-[60px] md:h-[80px] bg-zinc-300 z-20 fixed'>
            <div className='flex justify-between items-center w-full h-full px-4'>
                <div className='flex items-center '>
                    <div className='text-3xl sm:text-4xl'>
                        <h1>Brands</h1>
                    </div>
                    <ul className='hidden md:flex items-center'>
                        <li><Link to="Home" smooth={true} duration={500}>Home</Link></li>
                        <li><Link to="About" smooth={true} duration={500} offset={-150}>About</Link></li>
                        <li><Link to="Support" smooth={true} duration={500} offset={-50}>Support</Link></li>
                        <li><Link to="Platforms" smooth={true} duration={500} offset={-20}>Platforms</Link></li>
                        <li><Link to="Pricing" smooth={true} duration={500} offset={-40}>Pricing</Link></li>
                    </ul>
                </div>
                <div className='hidden md:flex gap-2'>
                    <button className='px-2 py-1'>Sign Up</button>
                    <button className='px-2 py-1'>Sign In</button>
                </div>
                <div className='md:hidden flex items-center ' onClick={handleChange}>
                    {
                        nav ? <AiOutlineMenu /> : <TiDeleteOutline />
                    }
                </div>
            </div>
            <div className={nav ? 'duration-500 md:hidden origin-top scale-y-0' : 'absolute scale-y-[1] w-screen bg-zinc-300 px-4 duration-500 origin-top md:hidden'}>
                <ul className='flex-row'>
                    <li className='py-2 border-b-2 border-gray-200'><Link to="Home" smooth={true} duration={500}>Home</Link></li>
                    <li className='py-2 border-b-2 border-gray-200'><Link to="About" smooth={true} duration={500} offset={-100}>About</Link></li>
                    <li className='py-2 border-b-2 border-gray-200'><Link to="Support" smooth={true} duration={500} offset={-50}>Support</Link></li>
                    <li className='py-2 border-b-2 border-gray-200'><Link to="Platforms" smooth={true} duration={500} offset={20}>Platforms</Link></li>
                    <li className='py-2 border-b-2 border-gray-200'><Link to="Pricing" smooth={true} duration={500} offset={-50}>Pricing</Link></li>
                </ul>
                <div className='flex gap-4 py-2'>
                    <button className='px-2 py-1'>Sign Up</button>
                    <button className='px-2 py-1'>Sign In</button>
                </div>
            </div>
        </div >
    )
}

export default Nav