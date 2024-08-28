import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styles from './OnloadPage.module.scss'; // Import SCSS styles for this component

const OnloadPage = () => {
  // State to store the URLs of the audio files for Onload and Onclick audios
  const [onloadAudioUrl, setOnloadAudioUrl] = useState('');
  const [onclickAudioUrl, setOnclickAudioUrl] = useState('');

  // useEffect hook to fetch and play Onload audio when the component mounts
  useEffect(() => {
    const fetchOnloadAudio = async () => {
      try {
        // Make a GET request to the server to fetch the Onload audio
        const response = await axios.get('http://localhost:5000/api/audio/onload', { responseType: 'blob' });
        
        // Convert the audio blob into a URL and set it in the state
        const url = window.URL.createObjectURL(new Blob([response.data]));
        setOnloadAudioUrl(url);

        // Automatically play the Onload audio once the URL is set
        const audio = new Audio(url);
        audio.play();
      } catch (error) {
        console.error('Error fetching Onload audio:', error); // Handle any errors
      }
    };

    // Call the function to fetch the Onload audio
    fetchOnloadAudio();
  }, []); // The empty dependency array ensures this effect runs only once, when the component mounts

  // Function to handle playing the Onclick audio when the button is clicked
  const handleOnclickPlay = async () => {
    try {
      // Make a GET request to the server to fetch the Onclick audio
      const response = await axios.get('http://localhost:5000/api/audio/onclick', { responseType: 'blob' });
      
      // Convert the audio blob into a URL and set it in the state
      const url = window.URL.createObjectURL(new Blob([response.data]));
      setOnclickAudioUrl(url);

      // Play the Onclick audio when the button is clicked
      const audio = new Audio(url);
      audio.play();
    } catch (error) {
      console.error('Error fetching Onclick audio:', error); // Handle any errors
    }
  };

  return (
    <div className={styles.container}> {/* SCSS styling container */}
      <h1>Onload Page</h1>
      <p>Onload audio is playing...</p>
      
      {/* Button to trigger the playing of the Onclick audio */}
      <button onClick={handleOnclickPlay}>Play Onclick Audio</button>
    </div>
  );
};

export default OnloadPage;
