import React from 'react'

const About = () => {
    return (
        <div className='w-full' name='About'>
            <div className='w-full my-12 sm:my-24 lg:my-36'>
                <div className='text-center'>
                    <h1 className='text-5xl lg:text-6xl font-bold'>Trusted by developers across the world</h1>
                    <p className='text-2xl lg:text-3xl text-gray-500'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque asperiores earum placeat veritatis dignissimos itaque.</p>
                </div>
                <div className='grid md:grid-cols-3 md:gap-x-2 px-4 md:py-4'>
                    <div className='border text-center py-6 rounded-xl shadow-xl'>
                        <h1 className='text-6xl font-bold text-indigo-500'>100%</h1>
                        <p className='text-xl text-gray-500'>Completion</p>
                    </div>
                    <div className='border text-center py-6 rounded-xl shadow-xl'>
                        <h1 className='text-6xl font-bold text-indigo-500'>24/7</h1>
                        <p className='text-xl text-gray-500'>Delivery</p>
                    </div><div className='border text-center py-6 rounded-xl shadow-xl'>
                        <h1 className='text-6xl font-bold text-indigo-500'>100K</h1>
                        <p className='text-xl text-gray-500'>Transactions</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About