import { useEffect, useState } from 'react';
import './ViewPlaylist.scoped.scss';
// import queryString from 'query-string';
// import { useLocation } from 'react-router-dom';
import axios from 'axios';
import ListItem from '../ListItem/ListItem';
import Song from '../../types/Song';

const ViewPlaylist: React.FC = () => {
  // const location = useLocation();

  const [data, setData] = useState<Song[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const resp = await axios.get(`${process.env.REACT_APP_BASE_URL}/v1/music`, {
        headers: { Authorization: `Bearer ${localStorage.getItem('__TOKEN')}` },
      });
      setData(resp.data);
    };

    fetchData();
  }, []);

  // useEffect(() => {
  //   const query = queryString.parse(location.search);
  //   console.log(query);
  // }, [location]);

  return (
    <div className="view-playlist">
      {data.map((song, index) => {
        // eslint-disable-next-line react/no-array-index-key
        return <ListItem song={song} index={index + 1} key={`list-${index}`} />;
      })}
    </div>
  );
};

export default ViewPlaylist;
