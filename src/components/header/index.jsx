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
    <div className={styles.header}>
      <h1>
        {override ? (
          <div
            dangerouslySetInnerHTML={{
              __html: title,
            }}
          />
        ) : (
          tabs[language][title]
        )}
      </h1>
      <Divider />
    </div>
  );
};

export default Header;
