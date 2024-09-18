import React, { useState } from 'react'

function Contact() {

  const [firstName, setfirstName] = useState('');
  const [lastName, setlastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [gender, setGender] = useState('');
  const [feedback, setFeedback] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {firstName, lastName, email, password, confirmPassword, phone, gender, feedback}

    try {
      const response = await fetch('/api/signup', formData);
      alert('Form submitted successfully:' + response.data.message);
    } catch (error) {
      console.error('Error Submitting Form');
      alert('Failed to submit form');
    }

  }

  return (
    <div className='min-w-80 h-auto p-[80px] bg-blue-700 text-lg sm:bg-black md:bg-yellow-400 md:px-[250px] lg:bg-teal-500 lg:px-[300px] xl:bg-fuchsia-600 xl:px-[400px]'>
      <div className='border p-[20px] rounded-xl'>
        <form onSubmit={handleSubmit}>
          <div className='flex flex-col gap-[10px]'>
            <div>
              <label className='block text-white font-semibold mb-2'>First Name: </label>
              <input 
                type='name' 
                value={firstName}
                placeholder='first name' 
                className='p-2 rounded-md w-full'
                onChange={(e) => setfirstName(e.target.value)} 
              />
            </div>

            <div>
              <label className='block text-white font-semibold mb-2'>Last Name: </label>
              <input 
                type='name' 
                value={lastName}
                placeholder='last name' 
                className='p-2 rounded-md w-full'
                onChange={(e) => setlastName(e.target.value)}                
              />
            </div>

            <div>
            <label className='block text-white font-semibold mb-2'>Email: </label>
            <input 
              type='email' 
              value={email} 
              placeholder='email' 
              className='p-2 rounded-md w-full' 
              onChange={(e) => setEmail(e.target.value)}                
            />
            </div>

            <div>
            <label className='block text-white font-semibold mb-2'>Password: </label>
            <input 
              value={password} 
              type='password' 
              placeholder='Password' 
              className='p-2 rounded-md w-full'
              onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            
            <div>
            <label className='block text-white font-semibold mb-2'>Password: </label>
            <input 
              value={confirmPassword} 
              type='password' 
              placeholder='Confirm Password' 
              className='p-2 rounded-md w-full'
              onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>

            <div>
            <label className='block text-white font-semibold mb-2'>Phone Number: </label>
            <input 
              value={phone} 
              type='number' 
              placeholder='Phone number' 
              className='p-2 rounded-md w-full'
              onChange={(e) => setPhone(e.target.value)}
              />
            </div>

            <div>
              <label className='block text-white font-semibold mb-2'>Gender: </label>
              <select 
                value={gender} 
                onChange={(e) => setGender(e.target.value)}                
                className='p-2 rounded-md w-full'>
                <option value=''>M/F</option>
                <option value='male'>Male</option>
                <option value='female'>Female</option>
                <option value='transgender'>Transgender</option>
              </select>
            </div>

            <div>
              <label className='block text-white font-semibold mb-2'>Feedback: </label>
              <textarea 
                value={feedback} 
                type='text' 
                placeholder='give your feedback here' 
                className='p-2 rounded-md w-full' 
                onChange={(e) => setFeedback(e.target.value)}                
                />
            </div>

            <div className='flex justify-center items-center'>
              <button type='submit'
                className='bg-amber-600 text-white font-bold uppercase sm:bg-white sm:text-black md:bg-yellow-600 md:text-white xl:bg-fuchsia-400 p-2 rounded-xl'>
                Submit
              </button>
            </div>

          </div>

        </form>

      </div>

    </div>
  )
}

export default Contact

