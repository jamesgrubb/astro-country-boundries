import React, {useRef, useState,useEffect} from 'react'
import mapboxgl from 'mapbox-gl'
mapboxgl.accessToken = "pk.eyJ1IjoibWFraW5ndGhpbmdzIiwiYSI6ImNsdGc1N205MDBmMHgyam8xamVyOHI4YTIifQ.ewldWSKthpPIwCXvuKjPRw"


export default function Map() {

    const mapRef = useRef<HTMLDivElement | null>(null);
    const [country, setCountry] = useState("");
    const accessToken = "pk.eyJ1IjoibWFraW5ndGhpbmdzIiwiYSI6ImNsdGc1N205MDBmMHgyam8xamVyOHI4YTIifQ.ewldWSKthpPIwCXvuKjPRw";
    let map;
    mapboxgl.accessToken = accessToken;
    useEffect(() => {
        if (!mapRef.current) return; // initialize map only once// initialize map only once
        map = new mapboxgl.Map({
          container: mapRef.current,
          style: 'mapbox://styles/mapbox/streets-v12',
          center: [0,0],
          zoom: 0
        });
      },[]);
    


  return (
    <>
    <div style={{width: '100%', height: '100vh'}} ref={mapRef}></div>
    </>
  )
}
