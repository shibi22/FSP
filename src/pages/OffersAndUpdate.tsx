import React from 'react';

const OffersAndUpdate = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-6">Offers and Updates</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white shadow-md rounded-lg p-4">
          <h2 className="text-xl font-semibold">Offer 1</h2>
          <p className="text-gray-700">Description of offer 1 goes here.</p>
          <button className="mt-4 bg-[#116466] text-white py-2 px-4 rounded">Learn More</button>
        </div>
        <div className="bg-white shadow-md rounded-lg p-4">
          <h2 className="text-xl font-semibold">Offer 2</h2>
          <p className="text-gray-700">Description of offer 2 goes here.</p>
          <button className="mt-4 bg-[#116466] text-white py-2 px-4 rounded">Learn More</button>
        </div>
        <div className="bg-white shadow-md rounded-lg p-4">
          <h2 className="text-xl font-semibold">Update 1</h2>
          <p className="text-gray-700">Details about update 1 go here.</p>
          <button className="mt-4 bg-[#116466] text-white py-2 px-4 rounded">Read More</button>
        </div>
        <div className="bg-white shadow-md rounded-lg p-4">
          <h2 className="text-xl font-semibold">Update 1</h2>
          <p className="text-gray-700">Details about update 1 go here.</p>
          <button className="mt-4 bg-[#116466] text-white py-2 px-4 rounded">Read More</button>
        </div>
        <div className="bg-white shadow-md rounded-lg p-4">
          <h2 className="text-xl font-semibold">Update 1</h2>
          <p className="text-gray-700">Details about update 1 go here.</p>
          <button className="mt-4 bg-[#116466] text-white py-2 px-4 rounded">Read More</button>
        </div>
        {/* Add more offers/updates as needed */}
      </div>
    </div>
  );
};

export default OffersAndUpdate;
