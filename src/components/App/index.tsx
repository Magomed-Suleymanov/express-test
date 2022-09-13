import React, { useState } from 'react';
import '../../styles/app.scss';
import Sidebar from '../Sidebar';
import MapComponent from '../Map';
import data from '../../data/state.json';
import { Coordinates, IPoints } from '../../types';

const App = () => {
  const places: IPoints[] = data.pickPoints;
  const [coordinate, setCoordinate] = useState<Coordinates>();
  const [zoom, setZoom] = useState(5);

  return (
    <div className="app">
      <Sidebar
        setCoordinate={setCoordinate}
        setZoom={setZoom}
        places={places}
      />
      <MapComponent coordinate={coordinate} zoom={zoom} />
    </div>
  );
};

export default App;
