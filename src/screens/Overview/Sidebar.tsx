import { useEffect, useState } from 'react';
import { Link, useHistory, useRouteMatch } from 'react-router-dom';
import Axios from 'axios';
import MenuItem from '../../components/MenuItem/MenuItem';
import { HomeAlt, Pen } from '../../components/icons';
import styles from '../../styles/Overview.module.scss';

const Sidebar: React.FC = () => {
  const history = useHistory();
  const match = useRouteMatch();
  const [avatar, setAvatar] = useState(undefined);

  useEffect(() => {
    const fetchAvatar = async () => {
      const response = await Axios.get(`${process.env.REACT_APP_BASE_URL}/v1/users/my-avatar`, {
        headers: { Authorization: `Bearer ${localStorage.getItem('__TOKEN')}` },
      });
      if (response.data !== '') {
        setAvatar(response.data);
      }
    };

    fetchAvatar();
  }, []);
  return (
    <div className={styles['overview-sidebar']}>
      <img
        src={`${
          avatar
            ? `data:image/png;base64, ${avatar}`
            : `${process.env.REACT_APP_BASE_URL}/assets/images/avatar.png`
        }`}
        alt=""
        style={{
          margin: '30px auto',
          display: 'block',
          width: '64px',
          height: '64px',
          borderRadius: '50%',
        }}
      />
      <Link to={`${match.path}/account`} style={{ textDecoration: 'none' }}>
        <MenuItem
          Icon={HomeAlt}
          text="Account overview"
          indicator={history.location.pathname === '/overview/account' && true}
        />
      </Link>
      <Link to={`${match.path}/edit`} style={{ textDecoration: 'none' }}>
        <MenuItem
          Icon={Pen}
          text="Edit profile"
          indicator={history.location.pathname === '/overview/edit' && true}
        />
      </Link>
    </div>
  );
};

export default Sidebar;
