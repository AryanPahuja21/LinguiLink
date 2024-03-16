import React from 'react'

const page = () => {
  return (
    <main className="relative antialiased bg-gray-200 dark:bg-[#25292A] z-0 overflow-hidden pt-20">
      <header className="mt-4 md:mt-20 flex flex-col md:flex-row space-x-2 px-4 md:px-20">
        <div className="w-full md:w-1/2">
          <h1 className="text-2xl md:text-4xl lg:text-6xl font-bold text-gray-800 dark:text-gray-50 mt-20">
          Real-Time Translation Chat: Connect with the World {' '}
            <span className="font-thin tracking-wider">Instantly</span>
          </h1>
          <p className="my-10 text-gray-800 font-light max-w-xl dark:text-gray-200">
          Empower Yourself through Language Learning and Cultural Exchange, Seamless Communication Across Languages
          </p>
          <div className="relative px-8 py-2 border rounded-3xl bg-white cursor-pointer inline-block">
            <div
              className="absolute inset-0 transform translate-x-1 translate-y-2 rounded-3xl border px-8 py-2"
              style={{ zIndex: -10 }}
            ></div>
            <a
              href="#"
              className="relative text-gray-700 font-bold hover:text-green-500 transition duration-100 transform hover:-translate-y-2 hover:-translate-x-1"
            >
              Create Account
            </a>
          </div>
        </div>

        <div className="hidden md:block w-full md:w-1/2" style={{ perspective: '800px' }}>
          <div
            className="img-container "
            style={{ transform: '' }}
          >
            <img
              className="rounded-lg"
              src="https://cdn.dribbble.com/userupload/4500772/file/original-67ceb67e322009d96170add1f5a65717.png?resize=1200x900"
              alt="img-container"
            />
          </div>
        </div>
      </header>
      
      <section className="pt-20 dark:bg-gray-700">
        <div className="grid grid-cols-1 md:grid-cols-2 px-8 my-2 max-w-6xl mx-auto items-center mt-10">
          <div>
            <h1 className="text-4xl font-bold dark:text-gray-50 text-gray-700">
            Learn and Engage:  <span className="text-[#1a759f]">Unlock New Languages,</span> Discover Cultures
            </h1>
            <p className="my-8 dark:text-gray-200 text-gray-600">
            Breaking Down Barriers, One Conversation at a Time
            </p>
            <div className="relative px-8 py-2 border rounded-3xl bg-white cursor-pointer inline-block">
              <div
                className="absolute inset-0 transform translate-x-1 translate-y-2 rounded-3xl border px-8 py-2 dark:border-gray-50"
                style={{ zIndex: -10 }}
              ></div>
              <a
                href="#"
                className="relative text-gray-700 font-bold hover:text-green-500 transition duration-100 transform hover:-translate-y-2 hover:-translate-x-1 dark:border-gray-50"
              >
                Refer Now
              </a>
            </div>
          </div>

          <div className="relative shadow-2xl p-2 bg-gray-400 rounded-md mt-8 md:mt-0">
            <img
              src="https://svgsilh.com/svg/26432.svg"
              className="absolute -right-10 opacity-5 -top-10 w-48 h-48 z-10"
              style={{ zIndex: 20 }}
              alt="hero"
            />

            <img
              src="https://cdn.dribbble.com/userupload/5906458/file/original-9ca8da248b11c91b729c4d2df7334109.png?resize=752x"
              className="rounded-lg"
              alt="hero"
            />
          </div>
        </div>

        
      </section>
      <div className="py-6 flex flex-col justify-center sm:py-12 md:-mt-20 dark:bg-[#25292A]">
        <div className="h-90 rounded-xl p-4 m-2">
          <div className="md:flex justify-around px-10 py-8">
            <div className="py-5 md:py-0">
              <h4 className="font-bold text-green-500 mb-2 px-2">Explore</h4>
              <ul className="text-gray-600">
                <li className="py-2 cursor-pointer hover:border-purple-300 border border-transparent px-2 rounded-full">
                  Free tutorials
                </li>
                <li className="py-2 cursor-pointer hover:border-purple-300 border border-transparent px-2 rounded-full">
                  Payments
                </li>
                <li className="py-2 cursor-pointer hover:border-purple-300 border border-transparent px-2 rounded-full">
                  Referrals
                </li>
                <li className="py-2 cursor-pointer hover:border-purple-300 border border-transparent px-2 rounded-full">
                  Open Source
                </li>
              </ul>
            </div>
            <div className="py-5 md:py-0">
              <h4 className="font-bold text-green-500 mb-2 px-2">Site</h4>
              <ul className="text-gray-600">
                <li className="py-2 cursor-pointer hover:border-purple-300 border border-transparent px-2 rounded-full">
                  License
                </li>
                <li className="py-2 cursor-pointer hover:border-purple-300 border border-transparent px-2 rounded-full">
                  Articles
                </li>
                <li className="py-2 cursor-pointer hover:border-purple-300 border border-transparent px-2 rounded-full">
                  About
                </li>
                <li className="py-2 cursor-pointer hover:border-purple-300 border border-transparent px-2 rounded-full">
                  Support
                </li>
              </ul>
            </div>
            <div className="py-5 md:py-0">
              <h4 className="font-bold text-green-500 mb-2 px-2">Follow Us</h4>
              <div></div>
              <div></div>
            </div>
          </div>
          <div className="flex justify-between items-end px-12 md:px-32 py-8 text-gray-500">
            <div>Legal</div>
            <div>© 2021 AcePay. All Rights Reserved.</div>
            <div className="hidden md:block">
              <p className="font-bold tracking-tighter text-xl">1384</p>
              <p>Cr. funds transferred</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default page
