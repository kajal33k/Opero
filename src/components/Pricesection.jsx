import React from 'react';

const PricingSection = () => {
  // Define the plans with necessary information
  const plans = [
    {
      name: 'Standard',
      price: 29.99,
      features: [
        'HTML5 & CSS3',
        'Bootstrap v5',
        'Responsive Layout',
        'Cross-browser Support',
        "Remove Author's Credit",
        'PHP & Ajax Contact Form',
      ],
      bgColor: 'bg-blue-500',
    },
    {
      name: 'Professional',
      price: 49.99,
      features: [
        'HTML5 & CSS3',
        'Bootstrap v5',
        'Responsive Layout',
        'Cross-browser Support',
        "Remove Author's Credit",
        'PHP & Ajax Contact Form',
      ],
      bgColor: 'bg-green-500',
    },
    {
      name: 'Ultimate',
      price: 79.99,
      features: [
        'HTML5 & CSS3',
        'Bootstrap v5',
        'Responsive Layout',
        'Cross-browser Support',
        "Remove Author's Credit",
        'PHP & Ajax Contact Form',
      ],
      bgColor: 'bg-red-500',
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-center text-gray-900 mb-8">
        Our Pricing Plans
      </h1>
      <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
        Choose a plan that suits your needs. Each plan is designed to help you
        get the most out of our services.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Iterate over the plans */}
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`rounded-lg overflow-hidden shadow-lg ${plan.bgColor} text-white`}
          >
            <div className="p-6">
              <h2 className="text-2xl font-semibold mb-4">{plan.name}</h2>
              <div className="flex items-baseline">
                <span className="text-xl">$</span>
                <span className="text-5xl font-bold">{plan.price}</span>
                <span className="ml-2">/ Month</span>
              </div>
            </div>

            <div className="p-6 bg-white text-gray-900">
              {/* List the features for each plan */}
              <ul>
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="py-2">
                    <span className="inline-block w-3 h-3 bg-green-500 rounded-full mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            {/* Action button */}
            <div className="p-6 bg-gray-100 text-center text-white">
              <button className="bg-yellow-500 text-gray-100 py-2 px-4 rounded-lg">
                Choose Plan
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PricingSection;
