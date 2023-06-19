"use client"
import Image from 'next/image'
import { useEffect, useState } from 'react'

const projects = [
  'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  'https://images.pexels.com/photos/160107/pexels-photo-160107.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  'https://images.pexels.com/photos/251225/pexels-photo-251225.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  'https://images.pexels.com/photos/777001/pexels-photo-777001.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  'https://images.pexels.com/photos/392018/pexels-photo-392018.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  'https://images.pexels.com/photos/270360/pexels-photo-270360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  'https://images.pexels.com/photos/952670/pexels-photo-952670.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  'https://images.pexels.com/photos/669996/pexels-photo-669996.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  'https://images.pexels.com/photos/36717/amazing-animal-beautiful-beautifull.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  'https://images.pexels.com/photos/696680/pexels-photo-696680.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
]

const Home = () => {

  const [prev, setPrev] = useState<number>(0)
  const [curr, setCurr] = useState<number>(1)
  const [next, setNext] = useState<number>(2)
  const [scroll, setScroll] = useState<number>(0)

  const handleScroll = () => {
    console.log('called', prev, curr, next, next + 1, typeof (prev))
    setPrev(curr)
    setCurr(next)
    next === projects.length - 1 ? setNext(0) : setNext(next + 1)
  }
  setInterval(() => handleScroll(), 10000)

  return (

    <div className='px-36 flex'>
      <div className=' place-content-center w-2/3  mt-48'>
        <p className='text-slate-300 text-3xl'>
          Hello, <br />
          I'm Ramadhan Nsengiyumva,  <br />
          Full-stack software developer/DevOps <br />
          Based in Kigali, Rwanda
        </p>

        <p className='text-slate-500 w-1/2 text-md pt-20'>
          4+ years of experience, and I specialize in developing robust web applications
          using a wide range of front-end and back-end technologies. My passion lies in creating seamless
          user experiences and delivering high-quality code.
        </p>

      </div>
      <div className='rounded-sm mr-6 h-170 overflow-hidden'>
        <div className='relative'>
          <div className='mt-28 w-10/12 mx-auto'>
            <Image
              className='mb-2 h-56 rounded'
              width={500}
              height={0}
              src={projects[prev]} alt='Code' />
          </div>
          <div className='absolute top-36 z-2'>
            <Image
              className='mb-2 h-60 rounded'
              width={500}
              height={0}
              src={projects[curr]} alt='Code' />
          </div>
          <div className='mt-28 w-10/12 mx-auto'>
            <Image
              className='mb-2 h-56 rounded'
              width={500}
              height={0}
              src={projects[next]} alt='Code' />
          </div>
        </div>
      </div>
    </div>
  )
}
export default Home
