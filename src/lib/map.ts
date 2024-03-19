import mapboxgl from "mapbox-gl";

mapboxgl.accessToken = "pk.eyJ1IjoibWFraW5ndGhpbmdzIiwiYSI6ImNsdGc1N205MDBmMHgyam8xamVyOHI4YTIifQ.ewldWSKthpPIwCXvuKjPRw"

const map = new mapboxgl.Map({
    container: mapContainer.current,
    style: "mapbox://styles/mapbox/country_boundaries_v1",
    center: [0, 0],
    zoom: 0,
    interactive: false    
})

export default map