'use client'
import Image from 'next/image'
import React ,{useState} from 'react'
import { FcGoogle } from 'react-icons/fc';
import { BsFacebook } from 'react-icons/bs';
import { useFirebase } from 'Context/firebase';

const page = () => {
  const firebase = useFirebase()
  console.log(firebase)
  const handleClick =(e)=>{
    e.preventDefault()
    firebase.signupwithemailandpassword(email,password)
  }

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

 

  const cssCLasses = ' md:w-[290px] px-4 md:px-0 flex justify-center items-center gap-5 py-2 cursor-pointer  rounded-full mt-2 bg-[#575c5f22] text-white';
  const inputStyles = 'py-1 mt-5 px-3  md:w-[400px] bg-[#111827] text-white outline-none border-b-[1px] border-[#e7dbdb]'
  return (
    <main className='flex justify-center md:justify-between items-center px-2 md:pl-20 text-white'>
      <div >
        <form className='flex flex-col mb-10'>
          <h1 className='text-[38px] '>Sign up</h1>
          <input type="text"  placeholder='Name' className={`${inputStyles}`} />
          <input type="email" value={email} onChange={e =>setEmail(e.target.value)} placeholder='Email' className={`${inputStyles}`} />
          <input type="password" value={password}  onChange={e =>setPassword(e.target.value)} placeholder='Password' className={`${inputStyles}`} />
          <div onClick={()=> firebase.signupwithgoolge()} className={`${cssCLasses} mt-8`}>
            <FcGoogle className='text-[20px]'/>
            Continue with Google
          </div>
          
          <button onClick={handleClick} className='w-[150px] mt-5 py-2 px-4 rounded-xl bg-[#5c5050]'>SignUp</button>
        </form>
      </div>
      <div className='hidden md:block'>
        <Image className='w-[500px]  h-screen object-cover opacity-[0.3]' src='/img.avif' width={300} height={1200} alt='Img' />
      </div>
    </main>
  )
}

export default page