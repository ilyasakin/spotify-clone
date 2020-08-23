import React from 'react';
import { RotateSpinner } from 'react-spinners-kit';
import './Loading.scss';

const Loading = () => {
  return (
    <div className="loading-container">
      <RotateSpinner color="#1db954" />
    </div>
  );
};

export default Loading;
