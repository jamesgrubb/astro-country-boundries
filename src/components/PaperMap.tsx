import React from 'react';
import mapboxgl from 'mapbox-gl';

interface PaperMapProps {
  map: mapboxgl.Map | null;
}

const PaperMap: React.FC<PaperMapProps> = ({ map }) => {
  console.log(map)
  return (
    <div>
      {map ? (
        <p>Map is ready!</p>
      ) : (
        <p>Loading map...</p>
      )}
    </div>
  );
};

export default PaperMap;
