import * as Icon from '../components/icons';
import '../styles/storybook/icons.scss';

export default {
  title: 'Icons',
};

export const Icons: React.FC = () => (
  <div className="view">
    <Icon.Back />
    <Icon.Forward />
    <Icon.Home />
    <Icon.HomeActive />
    <Icon.Library />
    <Icon.LibraryActive />
    <Icon.Search />
    <Icon.SearchActive />
    <Icon.PlaylistPlus />
    <Icon.PlaylistHeart style={{ backgroundColor: '#000' }} />
    <Icon.DownloadIcon />
    <Icon.Playlist />
    <Icon.Devices />
  </div>
);
