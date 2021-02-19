import styles from './MenuItem.module.scss';

interface Props {
  text: string;
  indicator?: boolean;
  Icon?: React.FC<{ className?: string }>;
}

const MenuItem: React.FC<Props> = ({ text, indicator, Icon }) => {
  return (
    <div className={styles['overview-menu-item-container']} role="button">
      <div
        className={`${styles['overview-menu-item-indicator']} ${
          indicator ? styles['overview-menu-item-indicate'] : ''
        }`}
      />
      <div className={styles['overview-menu-item-text']}>
        {Icon && <Icon className={styles['overview-menu-item-icon']} />}
        {text}
      </div>
    </div>
  );
};

export default MenuItem;
