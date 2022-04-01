import { useEffect } from 'react';
import * as tabs from '../../copy/navigation.json';
import Divider from '../../components/divider';
import { useLanguage } from '../language-selector/language-hook';

import styles from './index.module.scss';

const Header = ({ title, override = false }) => {
  const { language } = useLanguage();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, []);

  return (
    <div className={styles.headerWrapper}>
      <h1>
        {override ? (
          <div
            className={styles.header}
            dangerouslySetInnerHTML={{
              __html: title,
            }}
          />
        ) : (
          <div className={styles.header}>{tabs[language][title]}</div>
        )}
      </h1>
      <Divider />
    </div>
  );
};

export default Header;
