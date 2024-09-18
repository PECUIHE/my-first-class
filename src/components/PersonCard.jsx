import React from 'react'

export const PersonCard = ({item}) => {

  return (
    <div className='card-container border-rose-950 border-4 rounded-xl'>
        <div className='card-details p-3'>
            <h1 className='font-bold text-2xl uppercase mb-2'>{item.name}</h1>
            <p><strong>Age:</strong> {item.age}</p>
            <p><strong>Gender:</strong> {item.gender}</p>
            <p><strong>Phone:</strong> {item.phone}</p>
            <p><strong>Color:</strong> {item.color}</p>
        </div>
    </div>
  )
}


