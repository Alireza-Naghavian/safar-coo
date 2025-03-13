"use client";
import { SetState } from "@/types/global.t";
import "leaflet/dist/leaflet.css";
import {
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  useMap,
  useMapEvents,
} from "react-leaflet";
type Map_T = {
  position: [number, number];
  popupTitle: string;
  setPosition: SetState<[number, number]>;
};
function CustomMap({ position, popupTitle, setPosition }: Map_T) {
  return (
    <MapContainer
      center={position}
      zoom={13}
      style={{ height: "100%", width: "100%" }}
      scrollWheelZoom
    >
      <ChangeCenter position={position} />
      <DetectPosition setPosition={setPosition} />
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
      />
      <Marker position={position} >
        <Popup>{popupTitle}</Popup>
      </Marker>
    </MapContainer>
  );
}

const ChangeCenter = ({ position }: { position: [number, number] }) => {
  const map = useMap();
  map.setView(position);
  return null;
};

const DetectPosition = ({ setPosition }: Pick<Map_T, "setPosition">) => {
  useMapEvents({
    click(e) {
      setPosition([e.latlng.lat, e.latlng.lng]);
    },
  });
  return null;
};
export default CustomMap;

