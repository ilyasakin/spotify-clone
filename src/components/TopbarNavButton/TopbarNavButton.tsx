import './TopbarNavButton.scss';
import { Back, Forward } from '../icons';

interface Props {
  direction: string;
}

const TopbarNavBtn: React.FC<Props> = ({ direction }) => {
  return (
    <div className="nav-button">
      {direction === 'left' && <Back className="nav-icon" />}
      {direction === 'right' && <Forward className="nav-icon" />}
    </div>
  );
};

export default TopbarNavBtn;
