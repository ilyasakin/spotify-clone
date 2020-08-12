import React from 'react';
import { DownloadIcon } from '../icons';
import './DownloadButton.scss';

const DownloadButton: React.FC = () => {
  return (
    <div className="download-button-container">
      <div className="download-button-inner-container">
        <div className="download-button-icon-container">
          <DownloadIcon className="download-button-icon" />
        </div>
        <span className="download-button-text">Download App</span>
      </div>
    </div>
  );
};

export default DownloadButton;
