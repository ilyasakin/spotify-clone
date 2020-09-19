import React, { useEffect, useState } from 'react';
import './Main.scoped.scss';
import axios from 'axios';
import { ImpulseSpinner } from 'react-spinners-kit';
import Section from '../Section/Section';

const Main: React.FC = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const resp = await axios.get(`${process.env.REACT_APP_BASE_URL}/api/music`, {
        headers: { Authorization: `Bearer ${localStorage.getItem('__TOKEN')}` },
      });
      setData(resp.data);
    };

    fetchData();
  }, []);

  return (
    <div className="main">
      {data.length < 1 ? (
        <div className="loading-indicator">
          <ImpulseSpinner frontColor="#1db954" />
        </div>
      ) : (
        <Section title="Songs" data={data} />
      )}
    </div>
  );
};

export default Main;
