import NavMenuItem from './NavMenuItem';
import { PlaylistHeart, PlaylistPlus } from '../icons';

export default {
  title: 'Navigation Menu Item',
};

export const navigationMenuItem: React.FC = () => {
  return (
    <div>
      <NavMenuItem text="Create a playlist" Icon={PlaylistPlus} />
      <NavMenuItem text="Liked Songs" Icon={PlaylistHeart} gradient />
    </div>
  );
};
