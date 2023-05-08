import { useState, useEffect } from 'react';
import Map from '../components/Map';
import InfoTab from '../components/InfoTab';
import InfoPage from '../components/InfoPage';
import 'firebase/compat/firestore';
import 'firebase/firestore';

const mapApiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;



export default function Home() {
  const [pubs, setPubs] = useState([]);
  const [selectedPub, setSelectedPub] = useState(null);
  const [showInfoPage, setShowInfoPage] = useState(false);

  useEffect(() => {
    const fetchPubs = async () => {
      // Fetch pubs
      const response = await fetch(`https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=44.494887,11.342616&radius=2000&type=bar&key=${mapApiKey}`);
      const data = await response.json();
      const pubList = data.results.filter(place => place.types.includes('bar') || place.types.includes('pub')).map(place => ({
        id: place.place_id,
        name: place.name,
        lat: place.geometry.location.lat,
        lng: place.geometry.location.lng
      }));
      setPubs(pubList);
    };

    fetchPubs();
  }, []);

  const handleMarkerClick = (pub) => {
    setSelectedPub(pub);
  };

  const handleShowMore = () => {
    setShowInfoPage(true);
  };

  const handleBack = () => {
    setShowInfoPage(false);
    setSelectedPub(null);
  };

  return (
    <div className="bg-orange-50 min-h-screen">
      <header className="bg-orange-500 p-4">
        <h1 className="text-white font-bold text-xl">BreskoBO</h1>
      </header>
      <Map pubs={pubs} onMarkerClick={handleMarkerClick} />
      {selectedPub && !showInfoPage && (
        <div className="absolute top-0 left-0 right-0">
          <InfoTab pub={selectedPub} onShowMore={handleShowMore} />
        </div>
      )}
      {selectedPub && showInfoPage && <InfoPage pub={selectedPub} onBack={handleBack} />}
    </div>
  );
}