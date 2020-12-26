import styles from './NavMenuItem.module.scss';

interface Props {
  text: string;
  Icon: React.FC<{ className: string }>;
  gradient?: boolean;
  onClick: () => void;
}

const NavMenuItem: React.FC<Props> = ({ Icon, text, gradient, onClick }) => {
  return (
    <button className={styles['playlist-menu-item']} onClick={onClick}>
      <div className={`${styles['icon-container']} ${gradient ? styles.gradient : ''}`}>
        <Icon className={`${styles.icon} ${gradient ? styles['white-color'] : ''}`} />
      </div>
      <span className={styles.text}>{text}</span>
    </button>
  );
};

export default NavMenuItem;
