import React from 'react';

const InfoPage = ({ pub, onBack }) => {
  return (
    <div className="bg-white p-4 h-screen overflow-y-scroll">
      <button className="bg-orange-500 text-white px-4 py-2 mb-4" onClick={onBack}>
        Home
      </button>
      <pre>{JSON.stringify(pub, null, 2)}</pre>
      <h2 className="text-2xl font-semibold mb-2">{pub.name}</h2>
      {pub.icon && <img src={pub.icon}></img>}
      <p>{pub.isOpen ? "APERTO" : "CHIUSO"}</p>
      <div className="mt-4">
        {pub.photos && pub.photos.map((photo, index) => (
          <img key={index} src={photo} alt={pub.name} className="w-full mb-4" />
        ))}
      </div>
      {pub.menu && (
        <div className="mt-4">
          <h3 className="text-xl font-semibold mb-2">Menu</h3>
          <ul>
            {pub.menu.map((item, index) => (
              <li key={index} className="mb-2">
                {item}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default InfoPage;
