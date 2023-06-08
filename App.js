import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Radar1 from './component/Radar1/Radar1';
import AIS1 from './component/AIS1/AIS1';
import AIS1Button from './component/AIS1/AIS1Button';
import ADSB1 from './component/ADSB1/ADSB1';
import ADSB1Button from './component/ADSB1/ADSB1Button';
import Radar1Button from './component/Radar1/Radar1Button';
import OwnPlatformButton from './component/OwnPlatform/OwnPlatformButton';
import OwnPlatform from './component/OwnPlatform/OwnPlatform';
import ConfigurationButton from './component/ConfigurationButton/ConfigurationButton';



function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<><OwnPlatform /><OwnPlatformButton/><Radar1Button /><AIS1Button/><ADSB1Button/><ConfigurationButton/></>} />
          <Route path="/OwnPlatform" element={<><OwnPlatform /><OwnPlatformButton/><Radar1Button /><AIS1Button/><ADSB1Button/><ConfigurationButton/></>} />
          <Route path="/Radar1" element={<><Radar1 /><OwnPlatformButton/><Radar1Button /><AIS1Button/><ADSB1Button/><ConfigurationButton/></>} />
          <Route path="/ADSB1" element={<><ADSB1 /><OwnPlatformButton /><Radar1Button /><AIS1Button/><ADSB1Button/><ConfigurationButton/></>} />
          <Route path="/AIS1" element={<><AIS1 /><OwnPlatformButton /><Radar1Button /><AIS1Button/><ADSB1Button/><ConfigurationButton/></>} />
          
        </Routes>
      </Router>
    </div>
  );
}

export default App;
