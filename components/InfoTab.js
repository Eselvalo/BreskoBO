import React from 'react';

const InfoTab = ({ pub, onShowMore }) => {
  return (
    <div className="bg-white fixed top-0 left-0 w-full p-4 shadow-lg">
      <h2 className="text-xl font-semibold mb-2">{pub.name}</h2>
      <p>{pub.openingHours}</p>
      <button
        className="bg-orange-500 text-white px-4 py-2 mt-4"
        onClick={onShowMore}
      >
        Show more
      </button>
    </div>
  );
};

export default InfoTab;
