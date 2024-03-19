import React, { useState, useEffect } from 'react'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
  

export default function CountryPicker() {
  const [countries, setCountries] = useState([]);
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    (async () => {
      const response = await fetch('./countryCodes.json');
      const countries = await response.json();
      setCountries(countries);
    })();
    
  }, []);

  

  console.log(selected) ;

  return (

    <Select  onValueChange={e => setSelected(e)}   >
      <SelectTrigger  className="w-max">
        <SelectValue placeholder="Theme" />
      </SelectTrigger>
      <SelectContent >
        {countries.map((country) => {
          return (
            <SelectItem   key={country['Country']} value={country["Alpha-3 code"]}>{country["Country"]}</SelectItem>
          );
        })}
      </SelectContent>
    </Select>
  );
}

