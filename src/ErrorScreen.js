import React from 'react';
import './ErrorScreen.css';

export default function ErrorScreen({ error }) {
  //
  // Here you can handle or track the error before rendering the message
  //
  return (
    <div className="error">
      <h3>We are sorry... something went wrong</h3>
      <p>We cannot process your request at this moment.</p>
      <p>ERROR: {error.message}</p>
    </div>
  );
} 
