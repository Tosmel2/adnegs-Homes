// import React from 'react'
import React, { useState } from 'react';
import states from '../assets/states.json';


const Contact = () => {
  const [file, setFile] = useState(null);

  function handleFileChange(event) {
    const file = event.target.files[0];
    // do something with the file, for example:
    console.log(file.name);
}

  function handleFileUpload(e) {
    setFile(e.target.files[0]);
  }
  return (
    <div className='contact_container'>
      <div className='row'>
        <section class="text-gray-600 body-font relative">
        <div class="container px-5 py-24 mx-auto">

          <div class="lg:w-full md:w-full mx-auto p-10" style={{borderRadius: '10px', boxShadow: '0px 4px 63px rgba(0, 0, 0, 0.15)'}}>
            <h2 className='text-2xl font-bold title-font mb-10 text-center' style={{color:'#F4511E'}}>Add A New Property</h2>
            <div class="flex flex-wrap -m-2">
              
              <div class="p-2 mobres">
                <div class="relative">
                  <label for="name" class="leading-7 text-sm text-gray-600">Name <span className='text-red-600'>*</span></label>
                  <input type="text" id="name" name="name" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-orange-500 focus:bg-white focus:ring-2 focus:ring-orange-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                </div>
              </div>

                <div class="p-2 mobres">
                <div class="relative">
                  <label for="address" class="leading-7 text-sm text-gray-600">Address <span className='text-red-600'>*</span></label>
                  <input type="text" id="address" name="address" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-orange-500 focus:bg-white focus:ring-2 focus:ring-orange-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                </div>
                </div>

              <div class="p-2 mobres">
                <div class="relative">
                  <label for="unitNumber" class="leading-7 text-sm text-gray-600">Unit Number <span className='text-red-600'>*</span></label>
                  <input type="number" id="unitNumber" name="unitNumber" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-orange-500 focus:bg-white focus:ring-2 focus:ring-orange-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                </div>
              </div>

              <div class="p-2 mobres">
                <div class="relative">
                  <label for="city" class="leading-7 text-sm text-gray-600">City <span className='text-red-600'>*</span></label>
                  <input type="text" id="city" name="city" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-orange-500 focus:bg-white focus:ring-2 focus:ring-orange-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                </div>
              </div>

                <div class="p-2 mobres">
                <div class="relative">
                  <label for="states" class="leading-7 text-sm text-gray-600">State <span className='text-red-600'>*</span></label>
                  <input type="text" id="state" name="state" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-orange-500 focus:bg-white focus:ring-2 focus:ring-orange-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                  <select id="states" name="states" className='absolute text-center w-2/3 outline-none' style={{right: '10px', top:'37px', backgroundColor:'#F9F9FA'}}>
                    <option value="" disabled selected />
                    {states.map((state) => (
                      <option key={state.value} value={state.value}>
                        {state.name}
                      </option>
                    ))}
                  </select>
                </div>
                </div>

              <div class="p-2 mobres">
                <div class="relative">
                  <label for="RoomType" class="leading-7 text-sm text-gray-600">Room Type <span className='text-red-600'>*</span></label>
                  <input type="text" id="roomType" name="roomType" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-orange-500 focus:bg-white focus:ring-2 focus:ring-orange-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                  <select id="roomType" name="roomType" className='absolute text-center w-2/3 outline-none' style={{right: '10px', top:'37px', backgroundColor:'#F9F9FA'}}>
                    <option value="" disabled selected />
                    <option value="executive">Executive</option>
                    <option value="vip">VIP</option>
                    <option value="royaldouble">Royal Double</option>
                    <option value="standard">Standard</option>
                    <option value="deluxe">Deluxe</option>
                    <option value="suite">Suite</option>
                  </select>
                </div>
              </div>

              <div class="p-2 mobres">
                <div class="relative">
                  <label for="price" class="leading-7 text-sm text-gray-600">Price <span className='text-red-600'>*</span></label>
                  <input type="number" id="price" name="price" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-orange-500 focus:bg-white focus:ring-2 focus:ring-orange-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                </div>
              </div>

                <div class="p-2 mobres">
                <div class="relative">
                  <label for="roomType" class="leading-7 text-sm text-gray-600">Room Type <span className='text-red-600'>*</span></label>
                  <input type="text" id="roomType" name="roomType" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-orange-500 focus:bg-white focus:ring-2 focus:ring-orange-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                  <select id="roomType" name="roomType" className='absolute text-center w-2/3 outline-none' style={{right: '10px', top:'37px', backgroundColor:'#F9F9FA'}}>
                    <option value="" disabled selected />
                    <option value="executive">Executive</option>
                    <option value="vip">VIP</option>
                    <option value="royaldouble">Royal Double</option>
                    <option value="standard">Standard</option>
                    <option value="deluxe">Deluxe</option>
                    <option value="suite">Suite</option>
                  </select>
                </div>
                </div>

              <div class="p-2 w-full">
                <div class="relative">
                  <label for="message" class="leading-7 text-sm text-gray-600">Description <span className='text-red-600'>*</span></label>
                  <textarea id="message" name="message" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-orange-500 focus:bg-white focus:ring-2 focus:ring-orange-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out" data-gramm="false" wt-ignore-input="true"></textarea>
                </div>
              </div>

              <div class="p-2 w-full">
              <label for="message" class="leading-7 text-sm text-gray-600">Upload Photos</label>
                  <div class="p-10 w-full rounded border text-center" style={{border:'2px dashed #F4511E'}}>
                  {/* <a href="/" className='text-center' onClick={() => document.getElementById("file-input").click()}>Browse File</a> */}
                <input
                  type="file"
                  id="file-input"
                  style={{ display: "none" }}
                  onChange={handleFileUpload}
                />
                {/* {file && <p>{file.name}</p>} */}

                    <p className='text-center text-bold text-gray-900 sm:text-md text-lg'>Drag your images here, or <span type="file" className='text-red-600'><a href="/" className='text-center' onClick={() => document.getElementById("file-input").click()}>browse</a></span></p>
                    <input type="file" id="file-input" style={{ display: "none" }}onChange={handleFileChange} />
                      {file && <p>{file.name}</p>}
                    {/* {file && <p>{file.name}</p>} */}
                    <p className='text-center' style={{color: 'rgba(0, 0, 0, 0.5)'}}>Supported:  JPG, JPEG, PNG</p>
                    {/* <input type="file" id="myFile" name="filename" /> */}
                  </div>

                {/* </div> */}
              </div>

              <div class="p-2 w-full">
                <button class="flex mx-auto text-white border-0 py-2 px-8 focus:outline-none hover:bg-orange-400 rounded text-lg" style={{backgroundColor: '#F4511E'}}>Add New Property</button>
              </div>
            </div>
          </div>
        </div>
      </section>
      </div>
    </div>
  )
}

export default Contact