import styles from './OverviewPage.module.scss';

const OverviewPage: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <div className={styles['overview-page-container']}>{children}</div>;
};

export default OverviewPage;
