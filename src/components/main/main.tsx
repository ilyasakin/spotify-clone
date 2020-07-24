import React, { useEffect, useState } from 'react';
import './main.scss';
import axios from 'axios';
import Section from '../section/section';

const Main: React.FC = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const resp = await axios.get(`${process.env.REACT_APP_BASE_URL}/api/music`);
      setData(resp.data);
    };

    fetchData();
  }, []);

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
