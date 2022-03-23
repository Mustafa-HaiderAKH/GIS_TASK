import { useRef, useState } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Circle,
  Polyline,
} from "react-leaflet";
export const LeafletMap = ({details}) => {
  const circleRef = useRef([]);
  const [totalMailbox, setTotalMailBox] = useState(0);

  const CurrentMailboxes = () => {
      if(totalMailbox!=0) return;
    circleRef.current.map((stop, index) => {
        details.mailBox.map((box, index) => {
        if (stop.getLatLng().distanceTo(box) < stop.getRadius()) {
          setTotalMailBox((r) => r + 1);
        }
      });
    });
  };
  
  return (
    <>
      <div className="container">
        <button className="button" onClick={() => CurrentMailboxes()}>
          Calculate
        </button>
        <MapContainer click={()=>console.log("done")}
          center={[33.287, 44.417]}
          zoom={12}
        >
            <TileLayer
              url="https://mt.google.com/vt/lyrs=y&x={x}&y={y}&z={z}"
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            />


          {details.mailBox.map((e, index) => (
            <Marker draggable={true} position={e} key={index}  />
          ))}


          {details.polylinePoints.map((e, index) => (
            <Circle
              center={e}
              color="red"
              radius={200}
              ref={(el) => (circleRef.current[index] = el)}
              key={index}
            />
          ))}

          
          <Polyline positions={[details.polylinePoints]} color="blue" />
        </MapContainer>

        <span className="title">Total Mail Box Can Served:{totalMailbox}</span>
      </div>
    </>
  );
};
