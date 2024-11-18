import React from 'react';

function Hero() {
  return (
    <div className="flex flex-col-reverse lg:flex-row items-center justify-between px-6 py-12 space-y-8 lg:space-y-0 lg:space-x-8">
      {/* Left Side: Text and Input */}
      <div className="max-w-lg text-center lg:text-left">
        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
          Awesome Software To Manage Your Business
        </h1>
        <p className="text-lg text-gray-600 mb-6">
          Tempor rebum no at dolore lorem clita rebum rebum ipsum rebum stet dolor sed justo kasd dolor sed magna dolor.
        </p>
        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          className="w-full max-w-xs px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Right Side: Image */}
      <div className="flex-shrink-0 w-full lg:w-1/2">
        <img
          src="\logo512.png" // Ensure the path is correct
          className="rounded-lg shadow-lg w-full h-auto"
          alt="Business software"
        />
      </div>
    </div>
  );
}

export default Hero;
