import styles from './Navbar.module.scss';
import Nav from '../Nav/Nav';
import NavMenu from '../NavMenu/NavMenu';
// import NavList from '../NavList/NavList';
import { Logo } from '../icons';

const Navbar: React.FC = () => {
  return (
    <div className={styles.navbar}>
      <Logo className={styles.logo} />
      <Nav />
      <div style={{ display: 'flex', flexDirection: 'column', gap: 24, marginTop: 24 }}>
        <NavMenu className={styles['nav-menu']} />
        {/* <NavList /> */}
      </div>
    </div>
  );
};

export default Navbar;
