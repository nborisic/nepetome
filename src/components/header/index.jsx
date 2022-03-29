import * as tabs from '../../copy/navigation.json';
import Divider from '../../components/divider';
import { useLanguage } from '../language-selector/language-hook';

import styles from './index.module.scss';

const Header = ({ title, override = false }) => {
  const { language } = useLanguage();

  return (
    <div className={styles.header}>
      <h1>{override ? title : tabs[language][title]}</h1>
      <Divider />
    </div>
  );
};

export default Header;
