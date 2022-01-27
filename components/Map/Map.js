import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import "leaflet-defaulticon-compatibility";

import { Icon } from "@iconify/react";

const Map = () => {
  const position = [8.968050901309136, 125.60670181111493];
  var myIcon = L.icon({
    iconUrl: "map-marker.png",
    iconSize: [56, 57.63],
  });
  return (
    <MapContainer
      style={{ height: "100%", width: "100%" }}
      center={position}
      zoom={16}
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="http://{s}.google.com/vt/lyrs=p&x={x}&y={y}&z={z}"
        maxZoom={20}
        subdomains={["mt0", "mt1", "mt2", "mt3"]}
      />
      <Marker position={position} icon={myIcon}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default Map;
