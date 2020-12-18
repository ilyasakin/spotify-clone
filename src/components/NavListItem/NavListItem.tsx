import styles from './NavListItem.module.scss';

interface Props {
  text: string;
}

const NavListItem: React.FC<Props> = ({ text }) => {
  return (
    <div className={styles['playlist-item']}>
      <span className={styles.text}>{text}</span>
    </div>
  );
};

export default NavListItem;
