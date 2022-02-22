import Navigation from '../navigation';
import NavigationModal from '../navigationModal';
import { useState } from 'react';

const Layout = ({ children }) => {
  const [isOpen, setOpen] = useState(false);
  return (
    <div>
      <Navigation isOpen={isOpen} setOpen={setOpen} />
      <NavigationModal showModal={isOpen} closeModal={() => setOpen(false)} />
      {children}
    </div>
  );
};

export default Layout;
