"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { io } from "socket.io-client";

const Page = () => {
  const router = useRouter();
  const [name,setName] = useState("");
  const [roomName,setRoomName] = useState("");
  
  const handleSubmit = () => {
    const socket = io("http://localhost:3000");
    socket.emit("createRoom", {name, roomName});
    router.push(`/chat/${roomName}`);
  };

  return (
    <div className="flex items-center justify-center h-screen" style={{backgroundImage: `url('https://cdn.dribbble.com/users/3892014/screenshots/16651989/media/3b96c846ca18e8fd254f43d8160e3815.png')`, backgroundSize: 'cover'}}>
      <div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
        <form className="space-y-6" action="#">
          <h5 className="text-xl font-medium text-gray-900 dark:text-white">
            Create a Room
          </h5>
          <div>
            <label
              htmlFor="name"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Your Name
            </label>
            <input
              type="name"
              name="name"
              id="name"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              placeholder="Enter Your Name"
              onChange={(e)=>{
                setName(e.target.value)
              }}
              required
            />
          </div>
          <div>
            <label
              htmlFor="roomname"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Room Name
            </label>
            <input
              type="roomname"
              name="roomname"
              id="roomname"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              placeholder="Enter Room Name"
              onChange={(e)=>{
                setRoomName(e.target.value)
              }}
              required
            />
          </div>
          <button

            onClick={handleSubmit}
            className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Create Room
          </button>
        </form>
      </div>
    </div>
  );
};

export default Page;
