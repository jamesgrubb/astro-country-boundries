import React, { useRef, useState, useEffect } from 'react';
import mapboxgl  from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
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
      // style: 'mapbox://styles/mapbox/streets-v12',
      style: {
        version:8,
        sources:{},
        layers:[]
      },
      center: [0, 0],
      zoom: 0,
      interactive: false,
      renderWorldCopies: false
    });

    map.on('load', () => {
      map.addLayer({
        id: 'base-map',
        type: 'fill',
        source: {
          type: 'vector',
          url: 'mapbox://mapbox.country-boundaries-v1'
        },
        'source-layer':'country_boundaries',
        paint: {
          'fill-color': 'blue',

        }
      })
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
