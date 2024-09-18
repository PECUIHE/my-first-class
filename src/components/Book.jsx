import React from 'react'

function Book({item}) {

  return (
    <div className='border-white border-4 rounded-lg bg-red-600 h-[100%]'>

      <div className='overflow-hidden'>
        <img src={item.cover} className='w-full rounded h-96' alt={item.originalTitle} />
      </div>
      

      <div className=''>

        <div>
          <h1 className='p-2 font-bold text-md text-[bisque]'>({item.number}). {item.title}</h1>
        </div>
        
        <div className='p-2 text-[antiquewhite] text-sm'>

          <div>
            <p className='text-justify line-clamp-4 mb-4'>{item.description}</p>
          </div>

          <div className='font-semibold flex justify-between mb-6'>
            <p>{item.releaseDate}</p>
            <p>Pg: {item.pages}</p>
          </div>

          <footer className='text-center font-semibold'>
            Copyright &copy; 2024 
          </footer>
          
        </div>

      </div>

    </div>
  )
}

export default Book

