import React from 'react'
import lop1 from '../assets/lop1.svg';
// import fl1 from '../assets/fl1.png';
// import fl2 from '../assets/fl2.png';
// import fl3 from '../assets/fl3.png';
// import fl4 from '../assets/fl4.png';
import lop2 from '../assets/lop2.png';
import lop3 from '../assets/lop3.png';
import lop4 from '../assets/lop4.png';
import lop5 from '../assets/lop5.png';
import lop33 from '../assets/lop33.png';
// import ml1 from '../assets/ml1.png';
// import testi1 from '../assets/testi1.png';
// import herobg from '../assets/herobg.png';

const ListOfProperties = () => {
  return (
    <div className='property_container'>
      <div className='row'>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
        <div class="cursor-pointer rounded-xl bg-white p-3 shadow-lg hover:shadow-xl">
        <div class="relative flex items-end overflow-hidden rounded-xl">
          <img src={lop1} alt="lop1" />

          <div class="absolute bottom-3 left-3 inline-flex items-center rounded-lg bg-white p-2 shadow-md">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>

          <span class="ml-1 text-sm text-slate-400">4.9</span>
          </div>
        </div>

        <div class="mt-1 p-2">
          <h2 class="text-slate-700">The Malta Hotel</h2>
          <p class="mt-1 text-sm text-slate-400">Italy, Europe</p>

          <div class="mt-3 flex items-end justify-between">
          <p>
            <span class="text-lg font-bold text-orange-500">$1,421</span>
            <span class="text-sm text-slate-400">/night</span>
          </p>

          <div class="group inline-flex rounded-xl bg-orange-100 p-2 hover:bg-orange-200">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-orange-400 group-hover:text-orange-500" viewBox="0 0 20 20" fill="currentColor">
            <path d="M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z" />
            </svg>
          </div>
          </div>
        </div>
        </div>

        <div class="cursor-pointer rounded-xl bg-white p-3 shadow-lg hover:shadow-xl">
        <div class="relative flex items-end overflow-hidden rounded-xl">
        <img src={lop5} alt="lop5" />

          <div class="absolute bottom-3 left-3 inline-flex items-center rounded-lg bg-white p-2 shadow-md">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>

          <span class="ml-1 text-sm text-slate-400">4.9</span>
          </div>
        </div>

        <div class="mt-1 p-2">
          <h2 class="text-slate-700">The Malta Hotel</h2>
          <p class="mt-1 text-sm text-slate-400">Italy, Europe</p>

          <div class="mt-3 flex items-end justify-between">
          <p>
            <span class="text-lg font-bold text-orange-500">$1,421</span>
            <span class="text-sm text-slate-400">/night</span>
          </p>

          <div class="group inline-flex rounded-xl bg-orange-100 p-2 hover:bg-orange-200">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-orange-400 group-hover:text-orange-500" viewBox="0 0 20 20" fill="currentColor">
            <path d="M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z" />
            </svg>
          </div>
          </div>
        </div>
        </div>

        <div class="cursor-pointer rounded-xl bg-white p-3 shadow-lg hover:shadow-xl">
        <div class="relative flex items-end overflow-hidden rounded-xl">
        <img src={lop33} alt="lop33" />

          <div class="absolute bottom-3 left-3 inline-flex items-center rounded-lg bg-white p-2 shadow-md">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>

          <span class="ml-1 text-sm text-slate-400">4.9</span>
          </div>
        </div>

        <div class="mt-1 p-2">
          <h2 class="text-slate-700">The Malta Hotel</h2>
          <p class="mt-1 text-sm text-slate-400">Italy, Europe</p>

          <div class="mt-3 flex items-end justify-between">
          <p>
            <span class="text-lg font-bold text-orange-500">$1,421</span>
            <span class="text-sm text-slate-400">/night</span>
          </p>

          <div class="group inline-flex rounded-xl bg-orange-100 p-2 hover:bg-orange-200">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-orange-400 group-hover:text-orange-500" viewBox="0 0 20 20" fill="currentColor">
            <path d="M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z" />
            </svg>
          </div>
          </div>
        </div>
        </div>
      </div>
          

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
        <div class="cursor-pointer rounded-xl bg-white p-3 shadow-lg hover:shadow-xl">
        <div class="relative flex items-end overflow-hidden rounded-xl">
        <img src={lop2} alt="lop2" />

          <div class="absolute bottom-3 left-3 inline-flex items-center rounded-lg bg-white p-2 shadow-md">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>

          <span class="ml-1 text-sm text-slate-400">4.9</span>
          </div>
        </div>

        <div class="mt-1 p-2">
          <h2 class="text-slate-700">The Malta Hotel</h2>
          <p class="mt-1 text-sm text-slate-400">Italy, Europe</p>

          <div class="mt-3 flex items-end justify-between">
          <p>
            <span class="text-lg font-bold text-orange-500">$1,421</span>
            <span class="text-sm text-slate-400">/night</span>
          </p>

            <div class="group inline-flex rounded-xl bg-orange-100 p-2 hover:bg-orange-200">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-orange-400 group-hover:text-orange-500" viewBox="0 0 20 20" fill="currentColor">
              <path d="M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z" />
              </svg>
            </div>
            </div>
          </div>
          </div>

          <div class="cursor-pointer rounded-xl bg-white p-3 shadow-lg hover:shadow-xl">
          <div class="relative flex items-end overflow-hidden rounded-xl">
          <img src={lop3} alt="lop3" />

            <div class="absolute bottom-3 left-3 inline-flex items-center rounded-lg bg-white p-2 shadow-md">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>

            <span class="ml-1 text-sm text-slate-400">4.9</span>
            </div>
          </div>

          <div class="mt-1 p-2">
            <h2 class="text-slate-700">The Malta Hotel</h2>
            <p class="mt-1 text-sm text-slate-400">Italy, Europe</p>

            <div class="mt-3 flex items-end justify-between">
            <p>
              <span class="text-lg font-bold text-orange-500">$1,421</span>
              <span class="text-sm text-slate-400">/night</span>
            </p>

            <div class="group inline-flex rounded-xl bg-orange-100 p-2 hover:bg-orange-200">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-orange-400 group-hover:text-orange-500" viewBox="0 0 20 20" fill="currentColor">
              <path d="M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z" />
              </svg>
            </div>
            </div>
          </div>
          </div>

          <div class="cursor-pointer rounded-xl bg-white p-3 shadow-lg hover:shadow-xl">
          <div class="relative flex items-end overflow-hidden rounded-xl">
          <img src={lop4} alt="lop4" />

            <div class="absolute bottom-3 left-3 inline-flex items-center rounded-lg bg-white p-2 shadow-md">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>

            <span class="ml-1 text-sm text-slate-400">4.9</span>
            </div>
          </div>

          <div class="mt-1 p-2">
            <h2 class="text-slate-700">The Malta Hotel</h2>
            <p class="mt-1 text-sm text-slate-400">Italy, Europe</p>

            <div class="mt-3 flex items-end justify-between">
            <p>
              <span class="text-lg font-bold text-orange-500">$1,421</span>
              <span class="text-sm text-slate-400">/night</span>
            </p>

            <div class="group inline-flex rounded-xl bg-orange-100 p-2 hover:bg-orange-200">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-orange-400 group-hover:text-orange-500" viewBox="0 0 20 20" fill="currentColor">
              <path d="M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z" />
              </svg>
            </div>
            </div>
          </div>
          </div>
        </div>


<div class="max-w-2xl mx-auto mb-7 mt-5 text-center">

	<nav aria-label="Page navigation example ">
		<ul class="inline-flex -space-x-px">
			<li>
				<a href="facebook.com/user" target="_blank"
					class="bg-white border border-gray-300 text-gray-500 hover:bg-orange-100 hover:text-gray-700 ml-0 rounded-l-lg leading-tight py-2 px-3 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Previous</a>
			</li>
			<li>
				<a href="facebook.com/user" target="_blank"
					class="bg-white border border-gray-300 text-gray-500 hover:bg-orange-100 hover:text-gray-700 leading-tight py-2 px-3 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">1</a>
			</li>
			{/* <li>
				<a href="facebook.com/user" target="_blank"
					class="bg-white border border-gray-300 text-gray-500 hover:bg-gray-100 hover:text-gray-700 leading-tight py-2 px-3 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">2</a>
			</li> */}
			<li>
				<a href="facebook.com/user" target="_blank"
					class="bg-orange-500 border border-gray-300 text-white hover:bg-orange-100 hover:text-blue-700  py-2 px-3 dark:border-gray-700 dark:bg-gray-700 dark:text-white">2</a>
			</li>
			{/* <li>
				<a href="facebook.com/user" target="_blank"
					class="bg-white border border-gray-300 text-gray-500 hover:bg-gray-100 hover:text-gray-700 leading-tight py-2 px-3 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">4</a>
			</li> */}
			<li>
				<a href="facebook.com/user" target="_blank"
					class="bg-white border border-gray-300 text-gray-500 hover:bg-orange-100 hover:text-gray-700 leading-tight py-2 px-3 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">3</a>
			</li>
			<li>
				<a href="facebook.com/user" target="_blank"
					class="bg-white border border-gray-300 text-gray-500 hover:bg-orange-100 hover:text-gray-700 rounded-r-lg leading-tight py-2 px-3 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Next</a>
			</li>
		</ul>
	</nav>

</div>
      </div>
    </div>
  )
}

export default ListOfProperties