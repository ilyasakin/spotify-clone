import { CircleSpinner } from 'react-spinners-kit';
import styles from './BigButton.module.scss';

interface Props {
  text: string;
  className?: string;
  variation?: 'fill' | 'outline' | 'pop';
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset' | undefined;
  loading?: boolean;
}

const BigButton: React.FC<Props> = ({ text, className, variation, onClick, type, loading }) => {
  return (
    <button
      className={`${styles.bigbutton}
      ${variation === 'outline' ? styles.outline : ''} 
      ${variation === 'fill' ? styles.fill : ''} 
      ${variation === 'pop' ? styles.pop : ''} 
      ${className}`}
      onClick={onClick}
      type={type}
    >
      {loading ? <CircleSpinner /> : text}
    </button>
  );
};

BigButton.defaultProps = {
  className: '',
  variation: 'fill',
  loading: false,
};

export default BigButton;
