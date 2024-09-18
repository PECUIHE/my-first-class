import React from 'react'
import { PersonCard } from '../components/PersonCard';



const data = [
  {
    name: 'Pecuihe',
    age: 27,
    gender: 'Female',
    phone: '+234 810 914 8628',
    color: 'Red'
  },
  {
    name: 'Moses',
    age: 28,
    gender: 'Male',
    phone: '+234 701 094 2297',
    color: 'Purple'
  },
  {
    name: 'Christee',
    age: 27,
    gender: 'Female',
    phone: '+234 907 168 9831',
    color: 'Forest green'
  },
  {
    name: 'Chris',
    age: 22,
    gender: 'Male',
    phone: '+234 916 461 9753',
    color: 'Black'
  },
  {
    name: 'Bassey',
    age: 28,
    gender: 'Male',
    phone: '+234 810 989 6364',
    color: 'Blue'
  },
  {
    name: 'Nse',
    age: 28,
    gender: 'Male',
    phone: '+234 806 140 0121',
    color: 'Yellow'
  }
]

function AboutUs() {
  return (
    <div className='p-4 bg-[bisque]'>

      <div className='mb-8'>
        <h1 className='text-center font-bold text-5xl uppercase'>software developers</h1>
      </div>

      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10'>
        {data.map((item, index) => (
          <div className='cards' key = {index}>
            <PersonCard item = {item} />
          </div>
        ))}
      </div>

    </div>
  )
}

export default AboutUs