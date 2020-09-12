import React, { useState, useContext, useEffect } from 'react';
import './PillMenu.scss';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import Axios from 'axios';
import { Link, useHistory } from 'react-router-dom';
import { ArrowDropDown } from '../icons';
import User from '../../context/User';

interface Props {
  className?: string | undefined;
  Text: string | undefined;
}

const PillMenu: React.FC<Props> = ({ className, Text }) => {
  const [avatar, setAvatar] = useState(undefined);
  const { setUser } = useContext(User);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const darkTheme = createMuiTheme({
    palette: {
      type: 'dark',
      background: { paper: '#282828' },
    },
  });

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const history = useHistory();

  useEffect(() => {
    const fetchAvatar = async () => {
      const response = await Axios.get(`${process.env.REACT_APP_BASE_URL}/api/users/myavatar`, {
        headers: { Authorization: `Bearer ${localStorage.getItem('__TOKEN')}` },
      });
      if (response.data !== '') {
        setAvatar(response.data);
      }
    };

    fetchAvatar();
  }, []);

  return (
    <>
      <button
        className={`pill-menu ${className || ''}`}
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        <img
          className="pill-menu-img"
          alt="avatar"
          src={
            avatar
              ? `data:image/png;base64, ${avatar}`
              : `${process.env.REACT_APP_BASE_URL}/assets/images/avatar.png`
          }
        />
        <span className="pill-menu-text">{Text || ''}</span>
        <ArrowDropDown className="pill-menu-drop-down-icon" />
      </button>
      <ThemeProvider theme={darkTheme}>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
          className="pill-menu-list"
        >
          <MenuItem component={Link} to="/overview">
            <span className="pill-menu-list-text">Account</span>
          </MenuItem>
          <MenuItem onClick={handleClose} divider>
            <span className="pill-menu-list-text">Profile</span>
          </MenuItem>
          <MenuItem
            onClick={() => {
              Axios.post(`${process.env.REACT_APP_BASE_URL}/api/users/logout`, null, {
                headers: { Authorization: `Bearer ${localStorage.getItem('__TOKEN')}` },
              });
              localStorage.removeItem('__TOKEN');
              setUser?.({});
              history.push('/');
            }}
          >
            <span className="pill-menu-list-text">Logout</span>
          </MenuItem>
        </Menu>
      </ThemeProvider>
    </>
  );
};

export default PillMenu;
