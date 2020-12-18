import styles from './NavButton.module.scss';

interface Props {
  text: string;
  Icon: React.FC<{ className: string }>;
  active?: boolean;
  onClick?: () => void;
}

const NavButton: React.FC<Props> = ({ Icon, text, active, onClick }) => {
  return (
    <button
      className={`${styles['navigation-button']} ${active ? styles.active : ''}`}
      onClick={onClick}
    >
      <Icon className={`${styles.icon} ${active ? styles['icon-active'] : ''}`} />
      <span className={`${styles.text} ${active ? styles['text-active'] : ''}`}>{text}</span>
    </button>
  );
};

export default NavButton;
