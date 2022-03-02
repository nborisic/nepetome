import NavTabs from '../navigationTabs';
import Hamburger from 'hamburger-react';
import Container from '../container';
import LanguageSelector from '../language-selector';
import logo from '../../assets/images/logo-circle.png';

import styles from './index.module.scss';

const Navigation = ({ isOpen, setOpen }) => {
  return (
    <Container className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.innerWrapper}>
          <img src={logo} alt="logo" className={styles.logo} />
          <NavTabs />
          <div className={styles.hamburger}>
            <Hamburger toggled={isOpen} toggle={setOpen} />
          </div>
          <LanguageSelector />
        </div>
      </div>
    </Container>
  );
};

export default Navigation;
