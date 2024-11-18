import React from 'react'

function Section4() {
  return (
    <div>
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between px-6 py-12 space-y-8 lg:space-y-0 lg:space-x-8">
      
   

     {/* Left Side: Text and Input */}
     <div className="bg-white py-16 px-6 text-center">
      <div className="max-w-4xl mx-auto space-y-8">
        
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
          App Customization
        </h2>
        
        {/* Description */}
        <p className="text-lg text-gray-600">
          Diam dolor diam ipsum et tempor sit. Aliqu diam amet diam et eos labore.
          Clita erat ipsum et lorem et sit, sed stet no labore lorem sit clita duo
          justo eirmod magna dolore erat amet.
        </p>

        {/* Features List */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-8">
          <div className="flex items-center space-x-3">
            <svg className="w-6 h-6 text-blue-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14M5 12l7 7M5 12l7-7" />
            </svg>
            <span className="text-lg text-gray-800">Fully customizable</span>
          </div>
          <div className="flex items-center space-x-3">
            <svg className="w-6 h-6 text-blue-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14M5 12l7 7M5 12l7-7" />
            </svg>
            <span className="text-lg text-gray-800">User friendly interface</span>
          </div>
          <div className="flex items-center space-x-3">
            <svg className="w-6 h-6 text-blue-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14M5 12l7 7M5 12l7-7" />
            </svg>
            <span className="text-lg text-gray-800">More effective & powerful</span>
          </div>
        </div>

      </div>
    </div>

      {/* Right Side: Image */}
      <div className="flex-shrink-0 w-full lg:w-1/2">
       <img
         src="\overview-2.jpg"  // Ensure the path is correct for Next.js static assets
         className="rounded-lg shadow-lg w-full h-auto"
         alt="Business software"
       />
     </div>
    
   </div>
    </div>
  )
}

export default Section4
