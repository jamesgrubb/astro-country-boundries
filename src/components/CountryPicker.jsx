import React, { useState, useEffect, useRef } from 'react'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
  
  import mapboxgl from 'mapbox-gl';

export default function CountryPicker() {
  const [countries, setCountries] = useState([]);
  const [selected, setSelected] = useState(null);
  const mapContainer = useRef(null);
  const map = useRef(null);

  useEffect(() => {
    (async () => {
      const response = await fetch('./countryCodes.json');
      const countries = await response.json();
      setCountries(countries);
    })();
    if(mapContainer.current) return;
    map.current = new mapboxgl.Map({      
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/country_boundaries_v1",
      center: [0, 0],
      zoom: 0,
      interactive: false
    })
  }, []);

  

  if (mapContainer.current && selected) {
    mapboxgl.accessToken = "pk.eyJ1IjoibWFraW5ndGhpbmdzIiwiYSI6ImNsdGc1N205MDBmMHgyam8xamVyOHI4YTIifQ.ewldWSKthpPIwCXvuKjPRw"
    const map = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/country_boundaries_v1",
      center: [0, 0],
      zoom: 0,
      interactive: false    
    })

    map.on('load', () => {
      map.setFilter('country_boundaries', [ '==', 'iso_3166_1_alpha_3', selected ]);
    })
  }

  const handleOnChange = (e) => {
    setSelected(e.target.value);
  }


  return (
<>
    <Select  onValueChange={e => setSelected(e)}   >
      <SelectTrigger  className="w-max">
        <SelectValue placeholder="Theme" />
      </SelectTrigger>
      <SelectContent >
        {countries.map((country) => {
          return (
            //Get contents of value

            <SelectItem onChangeCapture={handleOnChange}   key={country['Country']} value={country["Alpha-3 code"]}>{country["Country"]}</SelectItem>
          );
        })}
      </SelectContent>
    </Select>

    <div className='absolute inset-0 -z-10' ref={mapContainer}></div>
    </>
  );
}


