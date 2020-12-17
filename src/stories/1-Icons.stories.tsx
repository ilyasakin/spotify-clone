import * as Icons from '../components/icons';
import '../styles/storybook/icons.scss';

export default {
  title: 'Icons',
};

export const Icon: React.FC = () => (
  <div className="view">
    <Icons.Back />
    <Icons.Forward />
    <Icons.Home />
    <Icons.HomeActive />
    <Icons.Library />
    <Icons.LibraryActive />
    <Icons.Search />
    <Icons.SearchActive />
    <Icons.PlaylistPlus />
    <Icons.PlaylistHeart style={{ backgroundColor: '#000' }} />
    <Icons.DownloadIcon />
    <Icons.Playlist />
    <Icons.Devices />
  </div>
);
