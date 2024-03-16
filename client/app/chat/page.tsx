"use client"

import React from 'react'
import { useRouter } from 'next/navigation';

const page = () => {

  const router = useRouter();

  const handleCreateRoom = ()=>{
    router.push("/chat/createroom");
  }
  const handleJoinRoom = ()=>{
    router.push("/chat/joinroom");
  }

  return (
    <>
    <div className='relative'>
  <img src="https://img.freepik.com/free-vector/abstract-background-with-modern-dotted-shapes_1048-5171.jpg?w=740&t=st=1710625529~exp=1710626129~hmac=547c8448e834f7d92bbd3e25382c6d5319a5c83fa874616dd9e0ba1a37d09fef" className='absolute inset-0 w-full h-screen object-cover pt-0 z-[-10] blur-sm' alt="Background Image"></img>
  <div className='pt-40 w-fit mx-auto text-6xl font-bold tracking-tight bg-gradient-to-r from-red-500 to-blue-500 text-transparent bg-clip-text'>
    Chat with anyone
  </div>
  <p className='w-fit mx-auto mt-10 italic font-mono font-semibold text-black'>
    Choose to chat with anyone without any language barrier with our real-time translation chat room 
  </p>
  <section>
    <div className="grid justify-center mt-16">
      <button className='block px-3 py-2 bg-blue-500 rounded-xl m-5 text-white' onClick={handleCreateRoom}>
        Create Room
      </button>
      <button className='block px-3 py-2 bg-blue-500 rounded-xl m-5 text-white' onClick={handleJoinRoom}>
        Join Room
      </button>
    </div>
  </section>
</div>

    </>
    
  )
}

export default page
