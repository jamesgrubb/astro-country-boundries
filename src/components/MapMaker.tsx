import React, { useState } from 'react';
import MapComponent from '@/components/MapComponent';
import PaperMap from '@/components/PaperMap'; // Ensure correct import path
import mapboxgl from 'mapbox-gl';

mapboxgl.accessToken = "pk.eyJ1IjoibWFraW5ndGhpbmdzIiwiYSI6ImNsdGc1N205MDBmMHgyam8xamVyOHI4YTIifQ.ewldWSKthpPIwCXvuKjPRw";

export default function MapMaker() {
  const [map, setMap] = useState<mapboxgl.Map | null>(null);

  return (
    <>
      <MapComponent setMap={setMap} />
      <PaperMap map={map} /> {/* Ensure that map prop is correctly passed */}
    </>
  );
}
