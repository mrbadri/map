import logo from './logo.svg';
import './App.css';

import { MapContainer, TileLayer, Marker  , Popup} from 'react-leaflet'

function App() {
  return (
    <MapContainer center={[51.505, -0.09]} zoom={13} style={{ height: '100vh', width: '100%' }}>
    <TileLayer
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      attribution="Map data &copy; <a href='https://www.openstreetmap.org/'>OpenStreetMap</a> contributors"
    />
    <Marker position={[51.505, -0.09]}>
      <Popup>
        A sample marker with a popup.
      </Popup>
    </Marker>
  </MapContainer>
  );
}

export default App;
