import mapboxgl from "mapbox-gl";

export interface MapComponentProps {
    setMap: (map: mapboxgl.Map | null) => void;
    map: mapboxgl.Map | null
}