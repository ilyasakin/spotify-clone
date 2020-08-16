import React, { useEffect, useState, useContext } from 'react';
import './Main.scss';
import axios from 'axios';
import { ImpulseSpinner } from 'react-spinners-kit';
import Section from '../Section/Section';
import User from '../../context/User';

const Main: React.FC = () => {
  const [data, setData] = useState([]);
  const { user } = useContext(User);

  useEffect(() => {
    const fetchData = async () => {
      const resp = await axios.get(`${process.env.REACT_APP_BASE_URL}/api/music`, {
        headers: { Authorization: `Bearer ${user?.token}` },
      });
      setData(resp.data);
    };

    fetchData();
  }, []);

  return (
    <div className="main">
      <div className="main-padding">
        {data.length < 1 ? (
          <div className="loading-indicator">
            <ImpulseSpinner frontColor="#1db954" />
          </div>
        ) : (
          <Section title="Songs" data={data} />
        )}
      </div>
    </div>
  );
};

export default Main;
