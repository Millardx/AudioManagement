import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainPage from './pages/MainPage';
import OnloadPage from './components/OnloadPage';
import AudioUpload from './components/AudioUpload';
import AudioManagement from './components/AudioManagement';

const App = () => {
  return (
    <Router>
      {/* Define all the routes for your app */}
      <Routes>
        {/* Default route: Audio Management page */}
        <Route path="/" element={<AudioManagement />} /> 

        {/* Route for the Audio Upload page */}
        <Route path="/Audio-Upload" element={<AudioUpload />} />  

        {/* Route for MainPage with dynamic audio ID passed as a URL parameter */}
        <Route path="/onload/:audioId" element={<MainPage />} /> 

        {/* Route for OnloadPage without any parameters */}
        <Route path="/onload" element={<OnloadPage />} />
      </Routes>
    </Router>
  );
};

export default App;
