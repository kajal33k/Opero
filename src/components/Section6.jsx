import React from 'react';

function Section6() {
  return (
    <div>
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Advanced Features</h2>
            <p className="max-w-3xl mx-auto text-gray-600 text-lg">
              Diam dolor diam ipsum et tempor sit. Aliqu diam amet diam et eos labore. Clita erat ipsum et lorem et sit, sed stet no labore lorem sit clita duo justo.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            
            {/* Feature 1: Fully Customizable */}
            <div className="feature-card bg-white rounded-xl p-8 text-center shadow-sm hover:shadow-xl">
              <div className="inline-flex items-center justify-center w-16 h-16 mb-6">
                <svg className="feature-icon w-12 h-12 text-sky-400" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Fully Customizable</h3>
              <p className="text-gray-600 leading-relaxed">
                Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet.
              </p>
            </div>

            {/* Feature 2: App Integration */}
            <div className="feature-card bg-white rounded-xl p-8 text-center shadow-sm hover:shadow-xl">
              <div className="inline-flex items-center justify-center w-16 h-16 mb-6">
                <svg className="feature-icon w-12 h-12 text-sky-400" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.5 12c0-1.1-.9-2-2-2H14V8c0-1.1-.9-2-2-2H8c-1.1 0-2 .9-2 2v2H4.5c-1.1 0-2 .9-2 2s.9 2 2 2H6v2c0 1.1.9 2 2 2h4c1.1 0 2-.9 2-2v-2h3.5c1.1 0 2-.9 2-2z"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">App Integration</h3>
              <p className="text-gray-600 leading-relaxed">
                Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet.
              </p>
            </div>

            {/* Feature 3: High Resolution */}
            <div className="feature-card bg-white rounded-xl p-8 text-center shadow-sm hover:shadow-xl">
              <div className="inline-flex items-center justify-center w-16 h-16 mb-6">
                <svg className="feature-icon w-12 h-12 text-sky-400" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V6h16v12zM6 10h12v2H6z"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">High Resolution</h3>
              <p className="text-gray-600 leading-relaxed">
                Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet.
              </p>
            </div>

            {/* Feature 4: Drag And Drop */}
            <div className="feature-card bg-white rounded-xl p-8 text-center shadow-sm hover:shadow-xl">
              <div className="inline-flex items-center justify-center w-16 h-16 mb-6">
                <svg className="feature-icon w-12 h-12 text-sky-400" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Drag And Drop</h3>
              <p className="text-gray-600 leading-relaxed">
                Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Section6;
