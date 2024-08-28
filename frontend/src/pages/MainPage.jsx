import React from 'react';
import { useNavigate } from 'react-router-dom';

const MainPage = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Main Page</h1>
      {/* New button to navigate to the Onload page */}
      <button onClick={() => navigate('/onload')}>
        Go to Onload Page
      </button>
    </div>
  );
};

export default MainPage;
