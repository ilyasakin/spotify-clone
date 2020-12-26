import { useHistory } from 'react-router-dom';
import styles from './NavMenu.module.scss';
import NavMenuItem from '../NavMenuItem/NavMenuItem';
import NavDivider from '../NavDivider/NavDivider';
import { PlaylistHeart /** , PlaylistPlus */ } from '../icons';

interface Props {
  className?: string;
}

const NavMenu: React.FC<Props> = ({ className }) => {
  const history = useHistory();

  return (
    <div className={`${styles['playlist-menu']} ${className}`}>
      <div className={styles['menu-title']}>PLAYLISTS</div>
      {/* <NavMenuItem
        text="Create a playlist"
        Icon={PlaylistPlus}
        // eslint-disable-next-line no-console
        onClick={() => console.log('Create Songs')}
      /> */}
      <NavMenuItem
        text="Liked Songs"
        Icon={PlaylistHeart}
        gradient
        onClick={() => history.push('/player/liked-songs')}
      />
      <NavDivider />
    </div>
  );
};

NavMenu.defaultProps = { className: '' };
export default NavMenu;
