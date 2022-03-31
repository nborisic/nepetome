import cx from 'classnames';
import { Link, useLocation } from 'react-router-dom';
import routes from '../../utils/routes.js';
import { useLanguage } from '../language-selector/language-hook';

import * as tabs from '../../copy/navigation.json';
import styles from './index.module.scss';

const NavigationTabs = () => {
  const location = useLocation();
  const { language } = useLanguage();

  const links = Object.keys(routes);

  return (
    <>
      <div className={styles.wrapper}>
        {links.map(link => {
          const tabClasses = cx(styles.tab, {
            [styles.tabActive]: routes[link] === location.pathname,
          });

          return (
            <Link
              to={routes[link]}
              className={tabClasses}
              key={link}
              onClick={() =>
                window.scrollTo({
                  top: 0,
                  behavior: 'smooth',
                })
              }
            >
              {tabs[language][link]}
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default NavigationTabs;
