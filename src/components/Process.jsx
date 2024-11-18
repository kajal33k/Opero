import React from 'react';

function Process() {
  return (
    <div className="flex flex-col-reverse lg:flex-row items-center justify-between px-6 py-12 space-y-8 lg:space-y-0 lg:space-x-8 bg-gray-100">
      {/* Left Side: Text and Steps */}
      <div className="w-full lg:w-1/2">
        <div className="text-center lg:text-left">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Three Simple Steps To Start Working With
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Diam dolor diam ipsum et tempor sit. Aliqu diam amet diam et eos labore. Clita erat ipsum et lorem et sit, sed stet no labore lorem sit clita duo justo eirmod magna dolore erat amet.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1  gap-4">
          {/* Step 1: Install the Software */}
          <div className="flex flex-col items-center bg-white p-8 shadow-md rounded-lg">
            <div className="w-16 h-16 mb-4 flex items-center justify-center bg-sky-400 text-white rounded-full">
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2L3.5 20.29h17L12 2zm0 3.66l4.09 9.84H7.91L12 5.66zM11 18h2v2h-2z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Install the Software
            </h3>
            <p className="text-gray-600">
              Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos erat ipsum et lorem et sit.
            </p>
          </div>

          {/* Step 2: Setup Your Profile */}
          <div className="flex flex-col items-center bg-white p-8 shadow-md rounded-lg">
            <div className="w-16 h-16 mb-4 flex items-center justify-center bg-sky-400 text-white rounded-full">
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Setup Your Profile
            </h3>
            <p className="text-gray-600">
              Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo.
            </p>
          </div>

          {/* Step 3: Enjoy The Features */}
          <div className="flex flex-col items-center bg-white p-8 shadow-md rounded-lg">
            <div className="w-16 h-16 mb-4 flex items-center justify-center bg-sky-400 text-white rounded-full">
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.41 4.59L17 1H7L3.59 4.59c-.36.36-.59.86-.59 1.41V21c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6c0-.55-.23-1.05-.59-1.41zM12 17l-5-5h3V9h4v3h3l-5 5z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Enjoy The Features
            </h3>
            <p className="text-gray-600">
              Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna.
            </p>
          </div>
        </div>
      </div>

      {/* Right Side: Image */}
      <div className="flex-shrink-0 w-full lg:w-1/2">
        <img
          src="/process.jpg" // Ensure the image is placed in the "public" folder for Next.js
          className="rounded-lg shadow-lg w-full h-auto"
          alt="Business software"
        />
      </div>
    </div>
  );
}

export default Process;
