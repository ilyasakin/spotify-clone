import styles from './NavMenuItem.module.scss';

interface Props {
  text: string;
  Icon: React.FC<{ className: string }>;
  gradient?: boolean;
}

const NavMenuItem: React.FC<Props> = ({ Icon, text, gradient }) => {
  return (
    <div className={styles['playlist-menu-item']}>
      <div className={`${styles['icon-container']} ${gradient ? styles.gradient : ''}`}>
        <Icon className={`${styles.icon} ${gradient ? styles['white-color'] : ''}`} />
      </div>
      <span className={styles.text}>{text}</span>
    </div>
  );
};

export default NavMenuItem;
