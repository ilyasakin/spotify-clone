import NavMenuItem from './NavMenuItem';
import { PlaylistHeart, PlaylistPlus } from '../icons';

export default {
  title: 'Navigation Menu Item',
};

export const navigationMenuItem: React.FC = () => {
  return (
    <div>
      <NavMenuItem
        text="Create a playlist"
        Icon={PlaylistPlus}
        // eslint-disable-next-line no-console
        onClick={() => console.log('Create a Playlist')}
      />
      <NavMenuItem
        text="Liked Songs"
        Icon={PlaylistHeart}
        gradient
        // eslint-disable-next-line no-console
        onClick={() => console.log('Liked songs')}
      />
    </div>
  );
};
