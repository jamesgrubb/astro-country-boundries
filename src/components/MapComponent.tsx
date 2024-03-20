import React, { useRef, useState, useEffect } from 'react';
import mapboxgl  from 'mapbox-gl';

mapboxgl.accessToken = "pk.eyJ1IjoibWFraW5ndGhpbmdzIiwiYSI6ImNsdGc1N205MDBmMHgyam8xamVyOHI4YTIifQ.ewldWSKthpPIwCXvuKjPRw";

interface MapComponentProps {
  setMap: (map: mapboxgl.Map | null) => void;
}

export default function MapComponent({ setMap }: MapComponentProps) {
  const mapRef = useRef<HTMLDivElement | null>(null);
  const [isMapLoaded, setIsMapLoaded] = useState(false);

  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapRef.current!,
      style: 'mapbox://styles/mapbox/streets-v12',
      center: [0, 0],
      zoom: 0
    });

    map.on('load', () => {
      setMap(map);
      setIsMapLoaded(true);
    });

    return () => {
      map.remove(); // Cleanup map instance
    };
  }, [setMap]);

  return (
    <div className='w-full h-screen' ref={mapRef}></div>
  );
}
