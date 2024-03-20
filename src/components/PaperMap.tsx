import React, {useEffect, useRef} from 'react';
import mapboxgl from 'mapbox-gl';
import paper from 'paper'
interface PaperMapProps {
  map: mapboxgl.Map | null;
}

const PaperMap: React.FC<PaperMapProps> = ({ map }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  useEffect(() => {
  console.log('Map',map)
    if(map){
      console.log('Attaching load event listener...');
    map.on('load',()=>{
      console.log('map loaded', map)
      paper.setup(canvasRef.current as HTMLCanvasElement);
      const mapClone = map?.getCanvas().toDataURL();
      console.log(mapClone)
      const mapImage = new paper.Raster(mapClone);
      mapImage.position = paper.view.center
      console.log("🚀 ~ useEffect ~ mapImage:", mapImage)
      mapImage.bounds = paper.view.bounds
    const dot = new paper.Path.Circle({
        center: [0, 0],
        radius: 10,
        fillColor: new paper.Color('red'),
      })  
    })  
  }
  },[map])
  



  return (
    <div>
      {map ? (
        <div>
        <p>Map is ready!</p>
        <canvas ref={canvasRef} data-resize="true">
          
        </canvas>
        </div>
      ) : (
        <p>Loading map...</p>
      )}
    </div>
  );
};

export default PaperMap;
