import Link from 'next/link';

const Navbar = () => (
    <div className='bg-slate-900 w-100 h-16 flex justify-between px-36'>
        <ul className='mt-6'><li><Link href="/">HOME</Link></li></ul>
        <ul className='flex mt-6'>
            <li className='px-6'> <Link href="/work">WORK</Link> </li>
            <li className='px-6'><Link href="/about">ABOUT</Link></li>
            <li className='px-6'><Link href="/contact">CONTACT</Link></li>
        </ul>
    </div>
)

export default Navbar
