'use client'
import Link from 'next/link'
import { useState } from 'react'



const Navbar = () => {

    const [currentTab, setCurrentTab] = useState('Home')

    return (
        <div className='bg-slate-900 w-100 h-16 flex justify-between px-36'>
            <ul className={`mt-6 px-1 ${currentTab === 'Home' && 'border-b-4 border-red-600'}`}><li><Link href="/"
                onClick={() => setCurrentTab('Home')}>HOME</Link></li></ul>
            <ul className='flex mt-6'>
                <li className={`mx-6 px-1 ${currentTab === 'Work' && 'border-b-4 border-red-600'}`}> <Link href="/work"
                    onClick={() => setCurrentTab('Work')}>WORK</Link> </li>
                <li className={`mx-6 px-1 ${currentTab === 'About' && 'border-b-4 border-red-600'}`}><Link href="/about"
                    onClick={() => setCurrentTab('About')}>ABOUT</Link></li>
                <li className={`mx-6 px-1 ${currentTab === 'Contact' && 'border-b-4 border-red-600'}`}><Link href="/contact"
                    onClick={() => setCurrentTab('Contact')}>CONTACT</Link></li>
            </ul>
        </div>
    )
}

export default Navbar
