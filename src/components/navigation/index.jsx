import NavTabs from '../navigationTabs';
import Hamburger from 'hamburger-react';

import { Link, useLocation } from 'react-router-dom';

import styles from './index.module.scss';

const Navigation = ({ isOpen, setOpen }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.innerWrapper}>
        <div className={styles.title}>NEPETOME</div>
        <NavTabs />
        <div className={styles.hamburger}>
          <Hamburger toggled={isOpen} toggle={setOpen} />
        </div>
      </div>
    </div>
  );
};

export default Navigation;
