import React, { useEffect } from 'react';
import Chart from 'chart.js/auto'; // Import Chart.js for the charts

function SectionSecond() {
  useEffect(() => {
    // Initialize charts
    const createLineChart = (id, label) => {
      const ctx = document.getElementById(id).getContext('2d');
      return new Chart(ctx, {
        type: 'line',
        data: {
          labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
          datasets: [{
            label: label,
            data: [12, 19, 3, 5, 2, 3],
            borderColor: 'rgb(14, 165, 233)',
            tension: 0.4,
          }],
        },
        options: {
          responsive: true,
          plugins: {
            legend: {
              display: false,
            },
          },
          scales: {
            y: {
              beginAtZero: true,
            },
          },
        },
      });
    };

    // Initialize all charts
    createLineChart('lineChart1', 'Single Line');
    createLineChart('lineChart2', 'Multiple Lines');

    const barCtx = document.getElementById('barChart').getContext('2d');
    new Chart(barCtx, {
      type: 'bar',
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [{
          label: 'Bar Chart',
          data: [12, 19, 3, 5, 2, 3],
          backgroundColor: 'rgb(14, 165, 233)',
        }],
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            display: false,
          },
        },
      },
    });

    const multiBarCtx = document.getElementById('multiBarChart').getContext('2d');
    new Chart(multiBarCtx, {
      type: 'bar',
      data: {
        labels: ['Jan', 'Feb', 'Mar'],
        datasets: [{
          label: 'Dataset 1',
          data: [12, 19, 3],
          backgroundColor: 'rgb(14, 165, 233)',
        }, {
          label: 'Dataset 2',
          data: [5, 15, 10],
          backgroundColor: 'rgb(56, 189, 248)',
        }],
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            display: false,
          },
        },
      },
    });
  }, []);

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="flex flex-col lg:flex-row gap-12">
        {/* Left Section */}
        <div className="lg:w-1/2">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
            Manage & Push Your Business To The Next Level
          </h1>
          <p className="text-gray-600 mb-12">
            Diam dolor diam ipsum et tempor sit. Aliqu diam amet diam et eos labore. Clita erat ipsum et lorem et sit, sed stet no labore lorem sit clita duo justo eirmod magna dolore erat amet.
          </p>

          {/* Features List */}
          <div className="space-y-8 mb-12">
            {/* Feature 1 */}
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <div className="w-8 h-8 bg-sky-400 rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">First Working Process</h3>
                <p className="text-gray-600">Aliqu diam amet diam et eos labore. Clita erat ipsum et lorem et sit, sed stet no labore lorem sit clita duo justo magna.</p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <div className="w-8 h-8 bg-sky-400 rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">24/7 Hours Support</h3>
                <p className="text-gray-600">Aliqu diam amet diam et eos labore. Clita erat ipsum et lorem et sit, sed stet no labore lorem sit clita duo justo magna.</p>
              </div>
            </div>
          </div>

          <button className="bg-sky-400 text-white px-8 py-3 rounded-full hover:bg-sky-500 transition-colors font-medium">
            Read More
          </button>
        </div>

        {/* Right Section - Dashboard Preview */}
        <div className="lg:w-1/2 bg-white rounded-xl shadow-lg p-6">
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-2">
              <span className="text-xl font-semibold text-gray-800"># DASHMIN</span>
            </div>
            <div className="flex items-center space-x-4">
              <input type="text" placeholder="Search" className="px-4 py-2 border rounded-lg text-sm" />
              <button className="text-gray-600 hover:text-gray-800">Message</button>
              <button className="text-gray-600 hover:text-gray-800">Notification</button>
              <div className="flex items-center space-x-2">
                <img src="/api/placeholder/32/32" alt="Profile" className="w-8 h-8 rounded-full" />
                <span className="text-sm font-medium">John Doe</span>
              </div>
            </div>
          </div>

          {/* Charts Grid */}
          <div className="grid grid-cols-2 gap-6">
            {/* Chart 1 */}
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="text-sm font-medium mb-4">Single Line Chart</h4>
              <canvas id="lineChart1" width="400" height="200"></canvas>
            </div>

            {/* Chart 2 */}
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="text-sm font-medium mb-4">Multiple Line Chart</h4>
              <canvas id="lineChart2" width="400" height="200"></canvas>
            </div>

            {/* Chart 3 */}
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="text-sm font-medium mb-4">Bar Chart</h4>
              <canvas id="barChart" width="400" height="200"></canvas>
            </div>

            {/* Chart 4 */}
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="text-sm font-medium mb-4">Multiple Bar Chart</h4>
              <canvas id="multiBarChart" width="400" height="200"></canvas>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SectionSecond;
