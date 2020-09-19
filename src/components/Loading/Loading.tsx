import React from 'react';
import { RotateSpinner } from 'react-spinners-kit';
import './Loading.scoped.scss';

const Loading = () => {
  return (
    <div className="container">
      <RotateSpinner color="#1db954" />
      <h6 className="text">Connecting to server</h6>
    </div>
  );
};

export default Loading;
