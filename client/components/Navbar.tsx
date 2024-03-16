"use client"

import Link from "next/link";
import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
    const [nav, setNav] = useState(false);

  const links = [
    {
      id: 1,
      linkname: "Home",
      link: "/home",
    },
    {
      id: 2,
      linkname: "Chat",
      link: "/chat",
    },
    {
      id: 3,
      linkname: "Learn",
      link: "/learn",
    },
    {
      id: 4,
      linkname: "Video",
      link: "/video",
    },
    {
      id: 5,
      linkname: "Docs",
      link: "/docs",
    },
  ];

  return (
    <div className="z-10 flex justify-between items-center w-full h-20 px-4 md:px-10 py-4 text-white bg-gray-500 fixed nav rounded-b-2xl">
      <div>
       
        <h1 className="text-3xl font-signature  pl-5 text-2xl font-bold italic text-black dark:text-gray-50">
          <a
            className="link-underline link-underline-black"
            href=""
            target="_blank"
            rel="noreferrer"
          >
            LinguiLink
          </a>
        </h1>
      </div>

      <ul className="hidden md:flex flex flex-row items-center space-x-8">
        {links.map(({ id, link, linkname }) => (
          <li
            key={id}
            className="nav-links font-semibold hover:text-green-500 transition py-1 px-3 rounded-lg duration-100 "
          >
            <Link href={link}>{linkname}</Link>
          </li>
        ))}
      </ul>

      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500">
          {links.map(({ id, link, linkname }) => (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize py-6 text-4xl"
            >
              <Link onClick={() => setNav(!nav)} href={link}>
                {linkname}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Navbar;
