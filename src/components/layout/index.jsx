import Navigation from '../navigation';
import NavigationModal from '../navigationModal';
import Footer from '../footer';
import { useState } from 'react';

import styles from './index.module.scss';

const Layout = ({ children }) => {
  const [isOpen, setOpen] = useState(false);
  return (
    <div className={styles.layout}>
      <Navigation isOpen={isOpen} setOpen={setOpen} />
      <NavigationModal showModal={isOpen} closeModal={() => setOpen(false)} />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
