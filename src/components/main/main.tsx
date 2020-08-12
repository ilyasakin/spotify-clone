import React, { useEffect, useState, useContext } from 'react';
import './main.scss';
import axios from 'axios';
import Section from '../section/section';
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
  }, [user]);

  // eslint-disable-next-line no-console
  console.log(data);
  return (
    <div className="main">
      <div className="main-padding">
        <Section title="Songs" data={data} />
      </div>
    </div>
  );
};

export default Main;
