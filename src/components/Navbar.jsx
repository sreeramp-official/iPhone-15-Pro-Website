import React from 'react'
import { appleImg } from '../utils'
import { Search, ShoppingBag } from 'lucide-react'
import { navLists } from '../constants'

const Navbar = () => {
    return (
        <header className='w-full py-5 sm:px-10 px-5 flex justify-between items-center'>
            <nav className='flex w-full screen-max-width'>
                <img src={appleImg} alt="apple" width={14} height={18} />
            </nav>

            <div className='flex flex-1 justify-center max-sm:hidden'>
                {navLists.map((nav, index) => (
                    <div key={index} className='px-5 text-sm cursor-pointer text-gray hover:text-white transition-all'>
                        {nav}
                    </div>
                ))}
            </div>

            <div className='flex items-baseline gap-7 max-sm:justify-end max-sm:flex-1 cursor-pointer'>
                <Search width={18} height={18} />
                <ShoppingBag width={18} height={18} />
            </div>
        </header>
    )
}

export default Navbar