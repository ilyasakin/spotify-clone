import { RotateSpinner } from 'react-spinners-kit';
import './Loading.scoped.scss';

const Loading: React.FC = () => {
  return (
    <div className="container">
      <RotateSpinner color="#1db954" />
      <h6 className="text">Connecting to server</h6>
    </div>
  );
};

export default Loading;
