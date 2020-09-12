import React from 'react';
import { Link, useHistory, useRouteMatch } from 'react-router-dom';
import OverviewMenuItem from '../../components/OverviewMenuItem/OverviewMenuItem';
import { Home2, Pen } from '../../components/icons';

const Sidebar = () => {
  const history = useHistory();
  const match = useRouteMatch();

  return (
    <div className="overview-sidebar">
      <img
        src="https://via.placeholder.com/64"
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
        <OverviewMenuItem
          Icon={Home2}
          text="Account overview"
          indicator={history.location.pathname === '/overview/account' && true}
        />
      </Link>
      <Link to={`${match.path}/edit`} style={{ textDecoration: 'none' }}>
        <OverviewMenuItem
          Icon={Pen}
          text="Edit profile"
          indicator={history.location.pathname === '/overview/edit' && true}
        />
      </Link>
    </div>
  );
};

export default Sidebar;
