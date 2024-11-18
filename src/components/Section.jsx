import React from 'react';

function Section() {
  return (
    <div className="py-12 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Feature Card 1 */}
          <div className="bg-white rounded-lg p-8 text-center shadow-lg hover:shadow-xl transition-shadow">
            <div className="flex justify-center mb-6">
              <svg className="w-16 h-16 text-blue-400" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M20 3H4C2.89 3 2 3.89 2 5V15C2 16.11 2.89 17 4 17H8V19H16V17H20C21.11 17 22 16.11 22 15V5C22 3.89 21.11 3 20 3M20 15H4V5H20V15M18 11H6V13H18V11M18 7H6V9H18V7Z"/>
              </svg>
            </div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Fully Customizable</h3>
            <p className="text-gray-600">Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet.</p>
          </div>

          {/* Feature Card 2 */}
          <div className="bg-white rounded-lg p-8 text-center shadow-lg hover:shadow-xl transition-shadow">
            <div className="flex justify-center mb-6">
              <svg className="w-16 h-16 text-blue-400" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M19.5 12c0-1.1-.9-2-2-2H14V8c0-1.1-.9-2-2-2H8c-1.1 0-2 .9-2 2v2H4.5c-1.1 0-2 .9-2 2s.9 2 2 2H6v2c0 1.1.9 2 2 2h4c1.1 0 2-.9 2-2v-2h3.5c1.1 0 2-.9 2-2z"/>
              </svg>
            </div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">App Integration</h3>
            <p className="text-gray-600">Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet.</p>
          </div>

          {/* Feature Card 3 */}
          <div className="bg-white rounded-lg p-8 text-center shadow-lg hover:shadow-xl transition-shadow">
            <div className="flex justify-center mb-6">
              <svg className="w-16 h-16 text-blue-400" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14z"/>
                <path d="M15 15h-2v-2h2v2zm0-4h-2V9h2v2zm-4 4H9v-2h2v2zm0-4H9V9h2v2z"/>
              </svg>
            </div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Drag And Drop</h3>
            <p className="text-gray-600">Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section;
