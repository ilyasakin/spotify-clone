import styles from './Page.module.scss';

const Page: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <div className={styles['overview-page-container']}>{children}</div>;
};

export default Page;
