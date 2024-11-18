import React from 'react';

const Counter = () => {
  return (
    <div className="w-full bg-sky-400 py-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-white text-center">
          {/* Active Install */}
          <div className="flex flex-col items-center">
            <div className="mb-4">
              <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                <path d="M14 8a2 2 0 1 0-4 0 2 2 0 0 0 4 0zM4 8a2 2 0 1 0-4 0 2 2 0 0 0 4 0zM24 8a2 2 0 1 0-4 0 2 2 0 0 0 4 0z" />
              </svg>
            </div>
            <div className="text-4xl font-bold mb-2">7264</div>
            <div className="text-lg">Active Install</div>
          </div>

          {/* Satisfied Clients */}
          <div className="flex flex-col items-center">
            <div className="mb-4">
              <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
              </svg>
            </div>
            <div className="text-4xl font-bold mb-2">6521</div>
            <div className="text-lg">Satisfied Clients</div>
          </div>

          {/* Award Wins */}
          <div className="flex flex-col items-center">
            <div className="mb-4">
              <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
              </svg>
            </div>
            <div className="text-4xl font-bold mb-2">729</div>
            <div className="text-lg">Award Wins</div>
          </div>

          {/* Client Reviews */}
          <div className="flex flex-col items-center">
            <div className="mb-4">
              <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z" />
              </svg>
            </div>
            <div className="text-4xl font-bold mb-2">5917</div>
            <div className="text-lg">Client Reviews</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Counter;
