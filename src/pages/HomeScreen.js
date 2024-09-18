import React from 'react'


// const nickName = 'PECUIHE';
// const skeleton = 'bones';
// const number = 206;


// function App() {

//   return (
//     <div>
//       <h1>Hello, {nickName}</h1>
//       <p>There are about {number} {skeleton} in a human body.</p>
//     </div>
//   );
// };


const friend = 'Peter';
const name = 'Pecuihe';
const skill = 'Software Developer';
const year = 2024;
const pet = 'dog';
const petName = 'Scooper';




function HomeScreen() {
  return (
    <div>
      
      <p>Hello <span className='name'>{friend}</span>, my name is <span className='name'>{name}</span>.</p>
      <p>I am a <span className='skill'>{skill}</span>.</p> 
      <p>I started out in <span className='year'>{year}</span>.</p>
      <p>I have a <span className='pet'>{pet}</span>, its name is <span className='petname'>{petName}</span>.</p>

    </div>
  )
}

export default HomeScreen

