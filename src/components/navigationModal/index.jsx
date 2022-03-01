import { useEffect, useRef } from 'react';
import ReactModal from 'react-modal';
import routes from '../../utils/routes.js';
import cx from 'classnames';
import * as tabs from '../../copy/navigation.json';
import { Link, useLocation } from 'react-router-dom';
import { disableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock';

import styles from './index.module.scss';

const NavigationModal = ({ showModal, closeModal }) => {
  const ref = useRef(null);

  const location = useLocation();
  const links = Object.keys(routes);

  const language = 'srb';

  useEffect(() => {
    // On unmount clear all scroll locks
    return () => clearAllBodyScrollLocks();
  });

  return (
    <ReactModal
      ariaHideApp={false}
      isOpen={showModal}
      onRequestClose={closeModal}
      role="dialog"
      className={styles.modalWrapper}
      overlayClassName={styles.modalLayout}
      onAfterOpen={() => disableBodyScroll(ref.current)}
      onAfterClose={() => clearAllBodyScrollLocks()}
      closeTimeoutMS={200} // Converting seconds to ms
    >
      <div ref={ref} className={styles.modal}>
        <div className={styles.slideNavigation}>
          {links.map(link => {
            const tabClasses = cx(styles.tab, {
              [styles.tabActive]: routes[link] === location.pathname,
            });

            return (
              <Link
                to={routes[link]}
                className={tabClasses}
                key={link}
                onClick={closeModal}
              >
                {tabs[language][link]}
              </Link>
            );
          })}
        </div>
      </div>
    </ReactModal>
  );
};

export default NavigationModal;
