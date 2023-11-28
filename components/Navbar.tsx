import { Socials } from '../constants'
import Image from 'next/image'
import React from 'react'


const Navbar = () => {
    return (
        <div className='fixed top-0 z-[40] w-full h-[100px] bg-transparent flex justify-between items-center px-10 md:px-20'>
            <div className='flex flex-row gap-3 items-center'>
                <div className='relative'>
                    <Image
                    src="/wdb-high-resolution-logo-white-transparent.png"
                    alt="logo"
                    width={70}
                    height={70}
                    className='w-full h-full object-contain rounded full'
                    />
                </div>
            <h1 className='text-white text-[25px] font-semibold'>Wess Brown Dev </h1>
            </div>

            <div className='flex flex-row gap-5 mb-2'>
                {Socials.map((social) => (
                    <a href="https://github.com/brownw15" className='rounded-[20px] group relative bg-trasparent px-5 border border-white py-3 text-lg text-white max-w-[200px]' target="_blank">
                        <Image 
                            key={social.name}
                            src={social.src}
                            alt={social.alt}
                            width={60}
                            height={60}
                            />
                    </a>
                ))}  
            </div>
        </div>
    )
}
export default Navbar;